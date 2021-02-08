import { CfnIPSet, CfnWebACL } from '@aws-cdk/aws-wafv2';
import * as cdk from '@aws-cdk/core';


export class WafStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const test = new CfnIPSet(this, 'IPSet', {
      ipAddressVersion: 'IPV4',
      scope: 'CLOUDFRONT',
      addresses: [
        '62.189.167.149/32',
        '62.189.167.150/32',
        '62.190.47.21/32',
        '62.190.47.22/32',
        '193.155.194.149/32',
        '193.155.194.150/32',
        '203.116.32.162/32',
        '65.242.152.118/32',
        '145.46.129.6/32',
        '145.46.129.7/32',
        '145.46.129.8/32',
        '145.46.129.134/32',
        '145.46.129.135/32',
        '145.46.129.10/32',
        '145.46.129.11/32',
        '145.46.129.136/32',
        '145.46.129.137/32',
      ],
    });

    new CfnWebACL(this, 'webAcl', {
      description: 'Allow access for IPSet',
      defaultAction: {
        block: {},
      },

      scope: 'CLOUDFRONT',
      visibilityConfig: {
        cloudWatchMetricsEnabled: false,
        metricName: 'Test',
        sampledRequestsEnabled: false,
      },
      rules: [
        {
          name: 'AWS-AWSManagedRulesAmazonIpReputationList',
          priority: 0,
          statement: {
            managedRuleGroupStatement: {
              vendorName: 'AWS',
              name: 'AWSManagedRulesAmazonIpReputationList',
            },
          },
          overrideAction: {
            none: {},
          },
          visibilityConfig: {
            sampledRequestsEnabled: true,
            cloudWatchMetricsEnabled: true,
            metricName: 'Staging-AWS-AWSManagedRulesAmazonIpReputationList',
          },
        },
        {
          name: 'XXX',
          priority: 1,
          statement: {
            ipSetReferenceStatement: {
              arn:
                //TODO
                test.attrArn,
            },
          },
          action: {
            allow: {},
          },
          visibilityConfig: {
            sampledRequestsEnabled: true,
            cloudWatchMetricsEnabled: true,
            metricName: 'TODO',
          },
        },
      ],
    });
  }
}
