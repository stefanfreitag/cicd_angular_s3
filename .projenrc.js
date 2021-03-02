const { AwsCdkConstructLibrary } = require('projen');

const project = new AwsCdkConstructLibrary({
    author: 'Stefan Freitag',
    authorAddress: 'stefan.freitag@udo.edu',
    cdkVersion: '1.91.0',
    defaultReleaseBranch: 'main',
    jsiiFqn: 'projen.AwsCdkConstructLibrary',
    name: 'ng-s3-cicd',
    dependabot: false,
    antitamper: false,
    keywords: [
        'cdk', 'angular', 'pipeline',
    ],
    catalog: {
        twitter: 'stefanfreitag',
        announce: false,
    },
    repositoryUrl: 'https://github.com/stefanfreitag/cicd_angular_s3',
    cdkDependencies: [
        '@aws-cdk/aws-cloudfront',
        '@aws-cdk/aws-codebuild',
        '@aws-cdk/core',
        '@aws-cdk/aws-codepipeline',
        '@aws-cdk/aws-codepipeline-actions',
        '@aws-cdk/aws-iam',
        '@aws-cdk/aws-s3',
        '@aws-cdk/aws-wafv2',
    ],
    devContainer: true,

});

project.synth();