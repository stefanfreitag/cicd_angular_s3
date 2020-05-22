import * as cdk from "@aws-cdk/core";
import {
  Bucket,
  BucketPolicy,
  BucketEncryption,
  LifecycleRule,
} from "@aws-cdk/aws-s3";
import { Pipeline, Artifact } from "@aws-cdk/aws-codepipeline";
import {
  CloudFrontWebDistribution,
  PriceClass,
  OriginAccessIdentity,
} from "@aws-cdk/aws-cloudfront";
import {
  GitHubSourceAction,
  GitHubTrigger,
  CodeBuildAction,
} from "@aws-cdk/aws-codepipeline-actions";
import { SecretValue, RemovalPolicy, Duration, Tag } from "@aws-cdk/core";
import { BuildSpec, Project } from "@aws-cdk/aws-codebuild";
import { Role, ServicePrincipal, ManagedPolicy } from "@aws-cdk/aws-iam";

export class NgS3CiCdStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    /**
     * S3 bucket storing the access logs for the web site.
     */
    const accessLogsBucket = new Bucket(this, "accessLogsBucket", {
      encryption: BucketEncryption.S3_MANAGED,
      publicReadAccess: false,
      blockPublicAccess: {
        restrictPublicBuckets: false,
        blockPublicAcls: false,
        ignorePublicAcls: false,
        blockPublicPolicy: false,
      },
      removalPolicy: RemovalPolicy.DESTROY,
      lifecycleRules: [
        {
          enabled: true,
          expiration: Duration.days(90),
        },
      ],
    });

    const oai = new OriginAccessIdentity(this, "originAccessIdentity", {
      comment: "Allows CloudFront to reach the bucket",
    });

    const websiteBucket = new Bucket(this, "webSiteBucket", {
      websiteIndexDocument: "index.html",
      publicReadAccess: false,

      encryption: BucketEncryption.S3_MANAGED,
      blockPublicAccess: {
        restrictPublicBuckets: false,
        blockPublicAcls: false,
        ignorePublicAcls: false,
        blockPublicPolicy: false,
      },
      removalPolicy: RemovalPolicy.DESTROY,
    });

    websiteBucket.grantRead(oai);

    new CloudFrontWebDistribution(this, "myDistribution", {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: websiteBucket,
            originAccessIdentity: oai,
          },
          behaviors: [{ isDefaultBehavior: true }],
        },
      ],
      comment: "Demo CloudFront Distribution",
      loggingConfig: {
        bucket: accessLogsBucket,
        prefix: "ng-s3-demo",
        includeCookies: true,
      },
      priceClass: PriceClass.PRICE_CLASS_100,
    });

    const pipeline = new Pipeline(this, "FrontendPipeline", {
      pipelineName: "deploy-angular-application",
    });

    const sourceStage = pipeline.addStage({
      stageName: "Source",
    });

    const buildStage = pipeline.addStage({
      stageName: "Build",
      placement: {
        justAfter: sourceStage,
      },
    });

    const sourceOutput = new Artifact();
    const sourceAction = new GitHubSourceAction({
      actionName: "GitHub",
      owner: "stefanfreitag",
      repo: "angular-hello-world",
      oauthToken: SecretValue.secretsManager("my-github-token"),
      output: sourceOutput,
      branch: "master",
      trigger: GitHubTrigger.POLL,
    });
    sourceStage.addAction(sourceAction);

    const role = new Role(this, "CodeBuildRole", {
      assumedBy: new ServicePrincipal("codebuild.amazonaws.com"),
      managedPolicies: [
        ManagedPolicy.fromAwsManagedPolicyName("AmazonS3FullAccess"),
      ],
    });

    const codeBuild = new Project(this, "CodeBuildProject", {
      role,
      buildSpec: BuildSpec.fromObject({
        version: 0.2,
        phases: {
          install: {
            "runtime-versions": {
              nodejs: 10,
            },
            commands: [
              "echo installing dependencies",
              "npm install",
              "echo installing aws cli",
              "pip install awscli --upgrade --user",
              "echo check version",
              "aws --version",
              "echo installing angular cli",
              "npm i -g @angular/cli",
            ],
          },
          build: {
            commands: [
              "echo Build started on `date`",
              "echo Building angular-hello-world",
              "ng build --prod",
            ],
            artifacts: {
              files: ["**/*"],
              "base-directory": "dist/angular-hello-world",
              "discard-paths": "yes",
            },
          },
          post_build: {
            commands: [
              "echo BUILD COMPLETE running sync with s3",
              `aws s3 rm s3://${websiteBucket.bucketName}/ --recursive`,
              `aws s3 cp ./dist/angular-hello-world s3://${websiteBucket.bucketName}/ --recursive`,
            ],
          },
        },
      }),
    });

    const buildAction = new CodeBuildAction({
      actionName: "Build",
      input: sourceOutput,
      project: codeBuild,
    });

    buildStage.addAction(buildAction);
  }
}
