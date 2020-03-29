import * as cdk from "@aws-cdk/core";
import { Bucket, BucketPolicy } from "@aws-cdk/aws-s3";
import { Pipeline, Artifact } from "@aws-cdk/aws-codepipeline";
import {
  GitHubSourceAction,
  GitHubTrigger,
  CodeBuildAction
} from "@aws-cdk/aws-codepipeline-actions";
import { SecretValue } from "@aws-cdk/core";
import { BuildSpec, Project } from "@aws-cdk/aws-codebuild";
import {
  Role,
  ServicePrincipal,
  ManagedPolicy,
  Effect,
  PolicyStatement,
  AnyPrincipal
} from "@aws-cdk/aws-iam";

export class NgS3CiCdStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const websiteBucket = new Bucket(this, "bucket", {
      websiteIndexDocument: "index.html",
      publicReadAccess: false,
      blockPublicAccess: {
        restrictPublicBuckets: false,
        blockPublicAcls: false,
        ignorePublicAcls: false,
        blockPublicPolicy: false
      }
    });

    const bucketContentStatement = new PolicyStatement({
      effect: Effect.ALLOW,
      actions: ["s3:GetObject"],
      resources: [websiteBucket.bucketArn + "/*"],
      principals: [new AnyPrincipal()]
    });
    bucketContentStatement.addCondition("IpAddress", {
      "aws:SourceIp": "87.122.209.106/32"
    });

    const bucketStatement: PolicyStatement = new PolicyStatement({
      effect: Effect.ALLOW,
      actions: ["s3:ListBucket", "s3:GetBucketLocation"],
      resources: [websiteBucket.bucketArn],
      principals: [new AnyPrincipal()]
    });
    bucketStatement.addCondition("IpAddress", {
      "aws:SourceIp": "87.122.209.106/32"
    });

    const bucketPolicy = new BucketPolicy(this, "bucketPolicy", {
      bucket: websiteBucket
    });

    bucketPolicy.document.addStatements(
      bucketContentStatement,
      bucketStatement
    );

    const pipeline = new Pipeline(this, "FrontendPipeline", {
      pipelineName: "deploy-angular-application"
    });

    const sourceStage = pipeline.addStage({
      stageName: "Source"
    });

    const buildStage = pipeline.addStage({
      stageName: "Build",
      placement: {
        justAfter: sourceStage
      }
    });

    const sourceOutput = new Artifact();
    const sourceAction = new GitHubSourceAction({
      actionName: "GitHub",
      owner: "stefanfreitag",
      repo: "angular-hello-world",
      oauthToken: SecretValue.secretsManager("my-github-token"),
      output: sourceOutput,
      branch: "master",
      trigger: GitHubTrigger.POLL
    });
    sourceStage.addAction(sourceAction);

    const role = new Role(this, "CodeBuildRole", {
      assumedBy: new ServicePrincipal("codebuild.amazonaws.com"),
      managedPolicies: [
        ManagedPolicy.fromAwsManagedPolicyName("AmazonS3FullAccess")
      ]
    });

    const codeBuild = new Project(this, "CodeBuildProject", {
      role,
      buildSpec: BuildSpec.fromObject({
        version: 0.2,
        phases: {
          install: {
            "runtime-versions": {
              nodejs: 10
            },
            commands: [
              "echo installing dependencies",
              "npm install",
              "echo installing aws cli",
              "pip install awscli --upgrade --user",
              "echo check version",
              "aws --version",
              "echo installing angular cli",
              "npm i -g @angular/cli"
            ]
          },
          build: {
            commands: [
              "echo Build started on `date`",
              "echo Building angular-hello-world",
              "ng build --prod"
            ],
            artifacts: {
              files: ["**/*"],
              "base-directory": "dist/angular-hello-world",
              "discard-paths": "yes"
            }
          },
          post_build: {
            commands: [
              "echo BUILD COMPLETE running sync with s3",
              `aws s3 rm s3://${websiteBucket.bucketName}/ --recursive`,
              `aws s3 cp ./dist/angular-hello-world s3://${websiteBucket.bucketName}/ --recursive`
            ]
          }
        }
      })
    });

    const buildAction = new CodeBuildAction({
      actionName: "Build",
      input: sourceOutput,
      project: codeBuild
    });

    buildStage.addAction(buildAction);
  }
}
