import {
  expect as expectCDK,
  matchTemplate,
  MatchStyle,
  haveResource,
  haveOutput,
  haveResourceLike,
} from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import NgS3CiCd = require("../lib/ng-s3-ci-cd-stack");
import { Stack } from "@aws-cdk/core";
import { NgS3CiCdStack } from "../lib/ng-s3-ci-cd-stack";

test("S3 Website bucket is setup properly", () => {
  const app = new cdk.App();

  const stack = new NgS3CiCd.NgS3CiCdStack(app, "MyTestStack");

  expectCDK(stack).to(
    haveResource("AWS::S3::Bucket", {
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
      BucketEncryption: {
        ServerSideEncryptionConfiguration: [
          {
            ServerSideEncryptionByDefault: {
              SSEAlgorithm: "AES256",
            },
          },
        ],
      },
    })
  );
});

test("S3 access log bucket is setup properly", () => {
  const app = new cdk.App();

  const stack = new NgS3CiCd.NgS3CiCdStack(app, "MyTestStack");
  expectCDK(stack).to(
    haveResource("AWS::S3::Bucket", {
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
      BucketEncryption: {
        ServerSideEncryptionConfiguration: [
          {
            ServerSideEncryptionByDefault: {
              SSEAlgorithm: "AES256",
            },
          },
        ],
      },
      LifecycleConfiguration: {
        Rules: [
          {
            ExpirationInDays: 90,
            Status: "Enabled",
          },
        ],
      },
    })
  );
});

test("CloudFormation Distribution is setup properly", () => {
  const app = new cdk.App();

  const stack = new NgS3CiCd.NgS3CiCdStack(app, "MyTestStack");
  expectCDK(stack).to(
    haveResourceLike("AWS::CloudFront::Distribution", {
      DistributionConfig: {
        DefaultRootObject: "index.html",
        Enabled: true,
        PriceClass: "PriceClass_100",
        Restrictions: {
          GeoRestriction: {
            Locations: ["DE", "GB"],
            RestrictionType: "whitelist",
          },
        },
      },
    })
  );
});

test("Pipeline is setup", () => {
  haveResourceLike("AWS::CodePipeline::Pipeline", {
    Stages: [
      {
        Name: "Source",
      },
      {
        Name: "Build",
      },
    ],
  });
});
