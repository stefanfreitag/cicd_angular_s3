import {
  expect as expectCDK,
  matchTemplate,
  MatchStyle,
  haveResource,
} from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import NgS3CiCd = require("../lib/ng-s3-ci-cd-stack");
import { Stack } from "@aws-cdk/core";
import { NgS3CiCdStack } from "../lib/ng-s3-ci-cd-stack";

test("S3 buckets are not public accessible ", () => {
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
    })
  );
});

test("S3 buckets are encrypted ", () => {
  const app = new cdk.App();

  const stack = new NgS3CiCd.NgS3CiCdStack(app, "MyTestStack");

  expectCDK(stack).to(
    haveResource("AWS::S3::Bucket", {
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
