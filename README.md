# CI/ CD Pipeline for an Angular project

## Source code repository

The Angular source code is stored in [one of my GitHub repositories](https://
github.com/stefanfreitag/angular-hello-world). It is a very basic application that can be build by executing

```bash
ng build --prod
```

## Build pipeline

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

In the `buildstage` a CodeBuild project is exectued. As part of the project the required software is installed: all required libraries, the AWS as well as the Angular CLI.

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
