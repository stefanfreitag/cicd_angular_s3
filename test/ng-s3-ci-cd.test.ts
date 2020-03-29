import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import NgS3CiCd = require('../lib/ng-s3-ci-cd-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new NgS3CiCd.NgS3CiCdStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
