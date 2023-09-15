# API Reference

**Classes**

Name|Description
----|-----------
[NgS3CiCdStack](#ng-s3-cicd-ngs3cicdstack)|*No description*
[WafStack](#ng-s3-cicd-wafstack)|*No description*



## class NgS3CiCdStack  <a id="ng-s3-cicd-ngs3cicdstack"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable), [ITaggable](#aws-cdk-lib-itaggable)
__Extends__: [Stack](#aws-cdk-lib-stack)

### Initializer




```ts
new NgS3CiCdStack(scope: Construct, id: string, props?: StackProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[StackProps](#aws-cdk-lib-stackprops)</code>)  *No description*
  * **analyticsReporting** (<code>boolean</code>)  Include runtime versioning information in this Stack. __*Default*__: `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key
  * **crossRegionReferences** (<code>boolean</code>)  Enable this flag to allow native cross region stack references. __*Default*__: false
  * **description** (<code>string</code>)  A description of the stack. __*Default*__: No description.
  * **env** (<code>[Environment](#aws-cdk-lib-environment)</code>)  The AWS environment (account/region) where this stack will be deployed. __*Default*__: The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.
  * **permissionsBoundary** (<code>[PermissionsBoundary](#aws-cdk-lib-permissionsboundary)</code>)  Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. __*Default*__: no permissions boundary is applied
  * **stackName** (<code>string</code>)  Name to deploy the stack with. __*Default*__: Derived from construct path.
  * **suppressTemplateIndentation** (<code>boolean</code>)  Enable this flag to suppress indentation in generated CloudFormation templates. __*Default*__: the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.
  * **synthesizer** (<code>[IStackSynthesizer](#aws-cdk-lib-istacksynthesizer)</code>)  Synthesis method to use while deploying this stack. __*Default*__: The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.
  * **tags** (<code>Map<string, string></code>)  Stack tags that will be applied to all the taggable resources and the stack itself. __*Default*__: {}
  * **terminationProtection** (<code>boolean</code>)  Whether to enable termination protection for this stack. __*Default*__: false




## class WafStack  <a id="ng-s3-cicd-wafstack"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable), [ITaggable](#aws-cdk-lib-itaggable)
__Extends__: [Stack](#aws-cdk-lib-stack)

### Initializer




```ts
new WafStack(scope: Construct, id: string, props?: StackProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[StackProps](#aws-cdk-lib-stackprops)</code>)  *No description*
  * **analyticsReporting** (<code>boolean</code>)  Include runtime versioning information in this Stack. __*Default*__: `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key
  * **crossRegionReferences** (<code>boolean</code>)  Enable this flag to allow native cross region stack references. __*Default*__: false
  * **description** (<code>string</code>)  A description of the stack. __*Default*__: No description.
  * **env** (<code>[Environment](#aws-cdk-lib-environment)</code>)  The AWS environment (account/region) where this stack will be deployed. __*Default*__: The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.
  * **permissionsBoundary** (<code>[PermissionsBoundary](#aws-cdk-lib-permissionsboundary)</code>)  Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. __*Default*__: no permissions boundary is applied
  * **stackName** (<code>string</code>)  Name to deploy the stack with. __*Default*__: Derived from construct path.
  * **suppressTemplateIndentation** (<code>boolean</code>)  Enable this flag to suppress indentation in generated CloudFormation templates. __*Default*__: the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.
  * **synthesizer** (<code>[IStackSynthesizer](#aws-cdk-lib-istacksynthesizer)</code>)  Synthesis method to use while deploying this stack. __*Default*__: The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.
  * **tags** (<code>Map<string, string></code>)  Stack tags that will be applied to all the taggable resources and the stack itself. __*Default*__: {}
  * **terminationProtection** (<code>boolean</code>)  Whether to enable termination protection for this stack. __*Default*__: false




