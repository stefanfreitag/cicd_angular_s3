const { awscdk } = require('projen');
const { UpgradeDependenciesSchedule } = require('projen/lib/javascript');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Stefan Freitag',
  authorAddress: 'stefan.freitag@udo.edu',
  cdkVersion: '2.273.0',
  defaultReleaseBranch: 'master',
  name: 'ng-s3-cicd',
  keywords: [
    'cdk', 'angular', 'pipeline',
  ],
  catalog: {
    twitter: 'stefanfreitag',
    announce: false,
  },
  repositoryUrl: 'https://github.com/stefanfreitag/cicd_angular_s3',
  devContainer: true,
  depsUpgradeOptions: {
    workflowOptions: {
      schedule: UpgradeDependenciesSchedule.MONTHLY,
    },
  },
  jsiiVersion: '~6.0.0',
  typescriptVersion: '~6.0.0',
  jestOptions: {
    jestVersion: '^29',
  },
});

const common_exclude = ['.history/', '.venv', '.idea'];
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);

project.synth();