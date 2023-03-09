import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';

import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as codepipelineactions from 'aws-cdk-lib/aws-codepipeline-actions';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';


export class NgS3CiCdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    /**
     * S3 bucket storing the access logs for the web site.
     */
    const accessLogsBucket = new s3.Bucket(this, 'accessLogsBucket', {
      encryption: s3.BucketEncryption.S3_MANAGED,
      publicReadAccess: false,
      blockPublicAccess: {
        restrictPublicBuckets: true,
        blockPublicAcls: true,
        ignorePublicAcls: true,
        blockPublicPolicy: true,
      },
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      lifecycleRules: [
        {
          enabled: true,
          expiration: cdk.Duration.days(90),
        },
      ],
    });

    const oai = new cloudfront.OriginAccessIdentity(this, 'originAccessIdentity', {
      comment: 'Allows CloudFront to reach the bucket',
    });

    const websiteBucket = new s3.Bucket(this, 'webSiteBucket', {
      publicReadAccess: false,

      encryption: s3.BucketEncryption.S3_MANAGED,
      blockPublicAccess: {
        restrictPublicBuckets: true,
        blockPublicAcls: true,
        ignorePublicAcls: true,
        blockPublicPolicy: true,
      },
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    websiteBucket.grantRead(oai);

    new cloudfront.CloudFrontWebDistribution(this, 'myDistribution', {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: websiteBucket,
            originAccessIdentity: oai,
          },
          behaviors: [{ isDefaultBehavior: true }],
        },
      ],
      comment: 'Demo CloudFront Distribution',
      geoRestriction: cloudfront.GeoRestriction.allowlist('DE', 'GB'),
      loggingConfig: {
        bucket: accessLogsBucket,
        prefix: 'ng-s3-demo',
        includeCookies: true,
      },
      priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
    });

    const pipeline = new codepipeline.Pipeline(this, 'FrontendPipeline', {
      pipelineName: 'deploy-angular-application',
    });

    const sourceStage = pipeline.addStage({
      stageName: 'Source',
    });

    const buildStage = pipeline.addStage({
      stageName: 'Build',
      placement: {
        justAfter: sourceStage,
      },
    });

    const sourceOutput = new codepipeline.Artifact();
    const sourceAction = new codepipelineactions.GitHubSourceAction({
      actionName: 'GitHub',
      owner: 'stefanfreitag',
      repo: 'angular-hello-world',
      oauthToken: cdk.SecretValue.secretsManager('my-github-token'),
      output: sourceOutput,
      branch: 'master',
      trigger: codepipelineactions.GitHubTrigger.POLL,
    });
    sourceStage.addAction(sourceAction);

    const role = new iam.Role(this, 'CodeBuildRole', {
      assumedBy: new iam.ServicePrincipal('codebuild.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonS3FullAccess'),
      ],
    });

    const codeBuild = new codebuild.Project(this, 'CodeBuildProject', {
      role,
      buildSpec: codebuild.BuildSpec.fromObject({
        version: 0.2,
        phases: {
          install: {
            'runtime-versions': {
              nodejs: 10,
            },
            'commands': [
              'echo installing dependencies',
              'npm install',
              'echo installing aws cli',
              'pip install awscli --upgrade --user',
              'echo check version',
              'aws --version',
              'echo installing angular cli',
              'npm i -g @angular/cli',
            ],
          },
          build: {
            commands: [
              'echo Build started on `date`',
              'echo Building angular-hello-world',
              'ng build --prod',
            ],
            artifacts: {
              'files': ['**/*'],
              'base-directory': 'dist/angular-hello-world',
              'discard-paths': 'yes',
            },
          },
          post_build: {
            commands: [
              'echo BUILD COMPLETE running sync with s3',
              `aws s3 rm s3://${websiteBucket.bucketName}/ --recursive`,
              `aws s3 cp ./dist/angular-hello-world s3://${websiteBucket.bucketName}/ --recursive`,
            ],
          },
        },
      }),
    });

    const buildAction = new codepipelineactions.CodeBuildAction({
      actionName: 'Build',
      input: sourceOutput,
      project: codeBuild,
    });

    buildStage.addAction(buildAction);
  }
}
