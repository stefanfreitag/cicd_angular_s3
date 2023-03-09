import * as assertions from 'aws-cdk-lib/assertions';
import * as cdk from 'aws-cdk-lib/core';
import { NgS3CiCdStack } from '../src/ng-s3-ci-cd-stack';


test('S3 Website bucket is setup properly', () => {
  const app = new cdk.App();

  const stack = new NgS3CiCdStack(app, 'MyTestStack');
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::S3::Bucket', {
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
            SSEAlgorithm: 'AES256',
          },
        },
      ],
    },
  });
});

test('S3 access log bucket is setup properly', () => {
  const app = new cdk.App();

  const stack = new NgS3CiCdStack(app, 'MyTestStack');
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::S3::Bucket', {

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
            SSEAlgorithm: 'AES256',
          },
        },
      ],
    },
    LifecycleConfiguration: {
      Rules: [
        {
          ExpirationInDays: 90,
          Status: 'Enabled',
        },
      ],
    },
  });
});

test('CloudFormation Distribution is setup properly', () => {
  const app = new cdk.App();

  const stack = new NgS3CiCdStack(app, 'MyTestStack');
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::CloudFront::Distribution', {
    DistributionConfig: {
      DefaultRootObject: 'index.html',
      Enabled: true,
      PriceClass: 'PriceClass_100',
      Restrictions: {
        GeoRestriction: {
          Locations: ['DE', 'GB'],
          RestrictionType: 'whitelist',
        },
      },
    },
  });
});
