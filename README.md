# CI/ CD Pipeline for an Angular project

The [AWS Cloud  Development Kit](https://github.com/aws/aws-cdk) (CDK) is used to build and expose an [Angular](https://angular.io/) application using [AWS CloudFront](https://aws.amazon.com/cloudfront/).

## The source code

The Angular source code is stored in [one of my GitHub repositories](https://github.com/stefanfreitag/angular-hello-world). It is a very basic application that can be build by executing

```bash
ng build --prod
```

## The build pipeline

The build pipeline consists of two stages, the `sourceStage` and the `buildStage`.

```javascript
const sourceStage = pipeline.addStage({
    stageName: "Source"
});

const buildStage = pipeline.addStage({
    stageName: "Build",
    placement: {
    justAfter: sourceStage
    }
});
```

The `sourceStage` contains only a single action responsible for monitoring changes on the code repository

```javascript
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
```

In the `buildstage` a CodeBuild project is executed. As part of the project the required software is installed: all required libraries, the AWS as well as the Angular CLI.

```bash
npm install
pip install awscli --upgrade --user,
npm i -g @angular/cli"
```

In the next phase of the project `ng build --prod` runs and generated the distribution files.

The last phase is responsible for updating the content of the used S3 bucket.

```bash
aws s3 rm s3://${websiteBucket.bucketName}/ --recursive
aws s3 cp ./dist/angular-hello-world s3://${websiteBucket.bucketName}/ --recursive
```

## The CloudFront setup

The S3 bucket `websiteBucket` is not exposed directly to the Internet, CloudFront will be installed in between. Hence the `publicReadAccess`  and `blockPublicAccess` are set to `false` settings.

```javascript
const websiteBucket = new Bucket(this, "bucket", {
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
```

To allow CloudFront access to the content of the S3 bucket a user is setup

```javascript
const oai = new OriginAccessIdentity(this, "originAccessIdentity", {
  comment: "Allows CloudFront to reach the bucket",
});
websiteBucket.grantRead(oai);
```

The `CloudFrontWebDistribution` contains aside from the `websiteBucket` and the user information also another bucket used to store the access logs.

```javascript
new CloudFrontWebDistribution(this, "myDistribution", {
  originConfigs: [
    {
      s3OriginSource: {
        s3BucketSource: websiteBucket,
        originAccessIdentity: oai,
      },
      behaviors: [{ isDefaultBehavior: true }],
    }],
    comment: "Demo CloudFront Distribution",
    loggingConfig: {
      bucket: accessLogsBucket,
      prefix: "ng-s3-demo",
      includeCookies: true,
    },
    priceClass: PriceClass.PRICE_CLASS_100,
});
```
