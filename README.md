# CI/ CD Pipeline for an Angular project

## Source code repository

The Angular source code is stored in [one of my GitHub repositories](https://github.com/stefanfreitag/angular-hello-world). It is a very basic application that can be build by e.g.

```bash
ng build --prod
```

## Build pipeline

The repository is also the starting point for the CodePipeline. The pipeline
will be triggered on changes on the master branch.

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
```

## Target
