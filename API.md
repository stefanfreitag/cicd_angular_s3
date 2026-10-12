# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NgS3CiCdStack <a name="NgS3CiCdStack" id="ng-s3-cicd.NgS3CiCdStack"></a>

#### Initializers <a name="Initializers" id="ng-s3-cicd.NgS3CiCdStack.Initializer"></a>

```typescript
import { NgS3CiCdStack } from 'ng-s3-cicd'

new NgS3CiCdStack(scope: Construct, id: string, props?: StackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.StackProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="ng-s3-cicd.NgS3CiCdStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="ng-s3-cicd.NgS3CiCdStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="ng-s3-cicd.NgS3CiCdStack.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.StackProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.addMetadata">addMetadata</a></code> | Adds an arbitrary key-value pair, with information you want to record about the stack. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.addStackDependency">addStackDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.addStackTag">addStackTag</a></code> | Configure a stack tag. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.removeStackTag">removeStackTag</a></code> | Remove a stack tag. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |

---

##### `toString` <a name="toString" id="ng-s3-cicd.NgS3CiCdStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="ng-s3-cicd.NgS3CiCdStack.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="ng-s3-cicd.NgS3CiCdStack.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

---

##### ~~`addDependency`~~ <a name="addDependency" id="ng-s3-cicd.NgS3CiCdStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

Stack dependencies may not cross Stage boundaries.

This method has been renamed to `addStackDependency` to more clearly
set it apart from `construct.node.addDependency`. See the documentation
of that function for more details.

###### `target`<sup>Required</sup> <a name="target" id="ng-s3-cicd.NgS3CiCdStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="ng-s3-cicd.NgS3CiCdStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="ng-s3-cicd.NgS3CiCdStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitrary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="ng-s3-cicd.NgS3CiCdStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="ng-s3-cicd.NgS3CiCdStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addStackDependency` <a name="addStackDependency" id="ng-s3-cicd.NgS3CiCdStack.addStackDependency"></a>

```typescript
public addStackDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

Stack dependencies may not cross Stage boundaries.

This method only adds dependencies between stacks. If you are looking
for a generic construct-to-construct dependency mechanism, use
`construct.node.addDependency` instead.

###### `target`<sup>Required</sup> <a name="target" id="ng-s3-cicd.NgS3CiCdStack.addStackDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="ng-s3-cicd.NgS3CiCdStack.addStackDependency.parameter.reason"></a>

- *Type:* string

---

##### `addStackTag` <a name="addStackTag" id="ng-s3-cicd.NgS3CiCdStack.addStackTag"></a>

```typescript
public addStackTag(tagName: string, tagValue: string): void
```

Configure a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="ng-s3-cicd.NgS3CiCdStack.addStackTag.parameter.tagName"></a>

- *Type:* string

---

###### `tagValue`<sup>Required</sup> <a name="tagValue" id="ng-s3-cicd.NgS3CiCdStack.addStackTag.parameter.tagValue"></a>

- *Type:* string

---

##### `addTransform` <a name="addTransform" id="ng-s3-cicd.NgS3CiCdStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="ng-s3-cicd.NgS3CiCdStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="ng-s3-cicd.NgS3CiCdStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="ng-s3-cicd.NgS3CiCdStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="ng-s3-cicd.NgS3CiCdStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="ng-s3-cicd.NgS3CiCdStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

**Deployment 1: break the relationship**:

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

**Deployment 2: remove the bucket resource**:

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="ng-s3-cicd.NgS3CiCdStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="ng-s3-cicd.NgS3CiCdStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="ng-s3-cicd.NgS3CiCdStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="ng-s3-cicd.NgS3CiCdStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="ng-s3-cicd.NgS3CiCdStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="ng-s3-cicd.NgS3CiCdStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="ng-s3-cicd.NgS3CiCdStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="ng-s3-cicd.NgS3CiCdStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="ng-s3-cicd.NgS3CiCdStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `removeStackTag` <a name="removeStackTag" id="ng-s3-cicd.NgS3CiCdStack.removeStackTag"></a>

```typescript
public removeStackTag(tagName: string): void
```

Remove a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="ng-s3-cicd.NgS3CiCdStack.removeStackTag.parameter.tagName"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="ng-s3-cicd.NgS3CiCdStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="ng-s3-cicd.NgS3CiCdStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="ng-s3-cicd.NgS3CiCdStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="ng-s3-cicd.NgS3CiCdStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="ng-s3-cicd.NgS3CiCdStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="ng-s3-cicd.NgS3CiCdStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="ng-s3-cicd.NgS3CiCdStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="ng-s3-cicd.NgS3CiCdStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="ng-s3-cicd.NgS3CiCdStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="ng-s3-cicd.NgS3CiCdStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="ng-s3-cicd.NgS3CiCdStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="ng-s3-cicd.NgS3CiCdStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="ng-s3-cicd.NgS3CiCdStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="ng-s3-cicd.NgS3CiCdStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="ng-s3-cicd.NgS3CiCdStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.consumeListReference">consumeListReference</a></code> | Override the reference strength for a specific cross-stack string list reference. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.consumeReference">consumeReference</a></code> | Override the reference strength for a specific cross-stack reference value. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |

---

##### `isConstruct` <a name="isConstruct" id="ng-s3-cicd.NgS3CiCdStack.isConstruct"></a>

```typescript
import { NgS3CiCdStack } from 'ng-s3-cicd'

NgS3CiCdStack.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="ng-s3-cicd.NgS3CiCdStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `consumeListReference` <a name="consumeListReference" id="ng-s3-cicd.NgS3CiCdStack.consumeListReference"></a>

```typescript
import { NgS3CiCdStack } from 'ng-s3-cicd'

NgS3CiCdStack.consumeListReference(value: string[], strength?: ReferenceStrength)
```

Override the reference strength for a specific cross-stack string list reference.

This is the string list equivalent of `consumeReference`.

###### `value`<sup>Required</sup> <a name="value" id="ng-s3-cicd.NgS3CiCdStack.consumeListReference.parameter.value"></a>

- *Type:* string[]

A tokenized string list reference.

---

###### `strength`<sup>Optional</sup> <a name="strength" id="ng-s3-cicd.NgS3CiCdStack.consumeListReference.parameter.strength"></a>

- *Type:* aws-cdk-lib.ReferenceStrength

The reference strength to use.

Defaults to `BOTH`.

---

##### `consumeReference` <a name="consumeReference" id="ng-s3-cicd.NgS3CiCdStack.consumeReference"></a>

```typescript
import { NgS3CiCdStack } from 'ng-s3-cicd'

NgS3CiCdStack.consumeReference(value: string, strength?: ReferenceStrength)
```

Override the reference strength for a specific cross-stack reference value.

Use this to weaken (or strengthen) an individual reference without
affecting other references to the same resource. For example:

```ts
// producerStack defines an SNS topic
declare const topic: sns.Topic;

// consumerStack subscribes to it with a weak reference,
// so the producer can be torn down without blocking on this consumer
const consumerStack = new Stack(app, 'Consumer', {
  env: { account: '123456789012', region: 'us-east-1' },
});
new sns.Subscription(consumerStack, 'Subscription', {
  topic: sns.Topic.fromTopicArn(consumerStack, 'Topic', Stack.consumeReference(topic.topicArn)),
  endpoint: 'https://example.com/webhook',
  protocol: sns.SubscriptionProtocol.HTTPS,
});
```

###### `value`<sup>Required</sup> <a name="value" id="ng-s3-cicd.NgS3CiCdStack.consumeReference.parameter.value"></a>

- *Type:* string

A tokenized string reference (e.g. `bucket.bucketArn`).

---

###### `strength`<sup>Optional</sup> <a name="strength" id="ng-s3-cicd.NgS3CiCdStack.consumeReference.parameter.strength"></a>

- *Type:* aws-cdk-lib.ReferenceStrength

The reference strength to use.

Defaults to `BOTH`.

---

##### `isStack` <a name="isStack" id="ng-s3-cicd.NgS3CiCdStack.isStack"></a>

```typescript
import { NgS3CiCdStack } from 'ng-s3-cicd'

NgS3CiCdStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="ng-s3-cicd.NgS3CiCdStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="ng-s3-cicd.NgS3CiCdStack.of"></a>

```typescript
import { NgS3CiCdStack } from 'ng-s3-cicd'

NgS3CiCdStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

Will return the closest containing `Stack` or `NestedStack`.

###### `construct`<sup>Required</sup> <a name="construct" id="ng-s3-cicd.NgS3CiCdStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this Stack deploys to. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to its parent. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns its parent stack. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#ng-s3-cicd.NgS3CiCdStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |

---

##### `node`<sup>Required</sup> <a name="node" id="ng-s3-cicd.NgS3CiCdStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="ng-s3-cicd.NgS3CiCdStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into an **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other account-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="ng-s3-cicd.NgS3CiCdStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="ng-s3-cicd.NgS3CiCdStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="ng-s3-cicd.NgS3CiCdStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="ng-s3-cicd.NgS3CiCdStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `env`<sup>Required</sup> <a name="env" id="ng-s3-cicd.NgS3CiCdStack.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this Stack deploys to.

---

##### `environment`<sup>Required</sup> <a name="environment" id="ng-s3-cicd.NgS3CiCdStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="ng-s3-cicd.NgS3CiCdStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to its parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="ng-s3-cicd.NgS3CiCdStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="ng-s3-cicd.NgS3CiCdStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="ng-s3-cicd.NgS3CiCdStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="ng-s3-cicd.NgS3CiCdStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The ID of the stack.

---

*Example*

```typescript
// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
```


##### `stackName`<sup>Required</sup> <a name="stackName" id="ng-s3-cicd.NgS3CiCdStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.STACK_NAME` directly.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="ng-s3-cicd.NgS3CiCdStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="ng-s3-cicd.NgS3CiCdStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="ng-s3-cicd.NgS3CiCdStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="ng-s3-cicd.NgS3CiCdStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="ng-s3-cicd.NgS3CiCdStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="ng-s3-cicd.NgS3CiCdStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns its parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="ng-s3-cicd.NgS3CiCdStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="ng-s3-cicd.NgS3CiCdStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---


### WafStack <a name="WafStack" id="ng-s3-cicd.WafStack"></a>

#### Initializers <a name="Initializers" id="ng-s3-cicd.WafStack.Initializer"></a>

```typescript
import { WafStack } from 'ng-s3-cicd'

new WafStack(scope: Construct, id: string, props?: StackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ng-s3-cicd.WafStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#ng-s3-cicd.WafStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#ng-s3-cicd.WafStack.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.StackProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="ng-s3-cicd.WafStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="ng-s3-cicd.WafStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="ng-s3-cicd.WafStack.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.StackProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ng-s3-cicd.WafStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#ng-s3-cicd.WafStack.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#ng-s3-cicd.WafStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#ng-s3-cicd.WafStack.addMetadata">addMetadata</a></code> | Adds an arbitrary key-value pair, with information you want to record about the stack. |
| <code><a href="#ng-s3-cicd.WafStack.addStackDependency">addStackDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#ng-s3-cicd.WafStack.addStackTag">addStackTag</a></code> | Configure a stack tag. |
| <code><a href="#ng-s3-cicd.WafStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#ng-s3-cicd.WafStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#ng-s3-cicd.WafStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#ng-s3-cicd.WafStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#ng-s3-cicd.WafStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#ng-s3-cicd.WafStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#ng-s3-cicd.WafStack.removeStackTag">removeStackTag</a></code> | Remove a stack tag. |
| <code><a href="#ng-s3-cicd.WafStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#ng-s3-cicd.WafStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#ng-s3-cicd.WafStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#ng-s3-cicd.WafStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#ng-s3-cicd.WafStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#ng-s3-cicd.WafStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |

---

##### `toString` <a name="toString" id="ng-s3-cicd.WafStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="ng-s3-cicd.WafStack.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="ng-s3-cicd.WafStack.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

---

##### ~~`addDependency`~~ <a name="addDependency" id="ng-s3-cicd.WafStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

Stack dependencies may not cross Stage boundaries.

This method has been renamed to `addStackDependency` to more clearly
set it apart from `construct.node.addDependency`. See the documentation
of that function for more details.

###### `target`<sup>Required</sup> <a name="target" id="ng-s3-cicd.WafStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="ng-s3-cicd.WafStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="ng-s3-cicd.WafStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitrary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="ng-s3-cicd.WafStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="ng-s3-cicd.WafStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addStackDependency` <a name="addStackDependency" id="ng-s3-cicd.WafStack.addStackDependency"></a>

```typescript
public addStackDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

Stack dependencies may not cross Stage boundaries.

This method only adds dependencies between stacks. If you are looking
for a generic construct-to-construct dependency mechanism, use
`construct.node.addDependency` instead.

###### `target`<sup>Required</sup> <a name="target" id="ng-s3-cicd.WafStack.addStackDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="ng-s3-cicd.WafStack.addStackDependency.parameter.reason"></a>

- *Type:* string

---

##### `addStackTag` <a name="addStackTag" id="ng-s3-cicd.WafStack.addStackTag"></a>

```typescript
public addStackTag(tagName: string, tagValue: string): void
```

Configure a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="ng-s3-cicd.WafStack.addStackTag.parameter.tagName"></a>

- *Type:* string

---

###### `tagValue`<sup>Required</sup> <a name="tagValue" id="ng-s3-cicd.WafStack.addStackTag.parameter.tagValue"></a>

- *Type:* string

---

##### `addTransform` <a name="addTransform" id="ng-s3-cicd.WafStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="ng-s3-cicd.WafStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="ng-s3-cicd.WafStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="ng-s3-cicd.WafStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="ng-s3-cicd.WafStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="ng-s3-cicd.WafStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

**Deployment 1: break the relationship**:

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

**Deployment 2: remove the bucket resource**:

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="ng-s3-cicd.WafStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="ng-s3-cicd.WafStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="ng-s3-cicd.WafStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="ng-s3-cicd.WafStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="ng-s3-cicd.WafStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="ng-s3-cicd.WafStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="ng-s3-cicd.WafStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="ng-s3-cicd.WafStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="ng-s3-cicd.WafStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `removeStackTag` <a name="removeStackTag" id="ng-s3-cicd.WafStack.removeStackTag"></a>

```typescript
public removeStackTag(tagName: string): void
```

Remove a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="ng-s3-cicd.WafStack.removeStackTag.parameter.tagName"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="ng-s3-cicd.WafStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="ng-s3-cicd.WafStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="ng-s3-cicd.WafStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="ng-s3-cicd.WafStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="ng-s3-cicd.WafStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="ng-s3-cicd.WafStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="ng-s3-cicd.WafStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="ng-s3-cicd.WafStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="ng-s3-cicd.WafStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="ng-s3-cicd.WafStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="ng-s3-cicd.WafStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="ng-s3-cicd.WafStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="ng-s3-cicd.WafStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="ng-s3-cicd.WafStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="ng-s3-cicd.WafStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ng-s3-cicd.WafStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#ng-s3-cicd.WafStack.consumeListReference">consumeListReference</a></code> | Override the reference strength for a specific cross-stack string list reference. |
| <code><a href="#ng-s3-cicd.WafStack.consumeReference">consumeReference</a></code> | Override the reference strength for a specific cross-stack reference value. |
| <code><a href="#ng-s3-cicd.WafStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#ng-s3-cicd.WafStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |

---

##### `isConstruct` <a name="isConstruct" id="ng-s3-cicd.WafStack.isConstruct"></a>

```typescript
import { WafStack } from 'ng-s3-cicd'

WafStack.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="ng-s3-cicd.WafStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `consumeListReference` <a name="consumeListReference" id="ng-s3-cicd.WafStack.consumeListReference"></a>

```typescript
import { WafStack } from 'ng-s3-cicd'

WafStack.consumeListReference(value: string[], strength?: ReferenceStrength)
```

Override the reference strength for a specific cross-stack string list reference.

This is the string list equivalent of `consumeReference`.

###### `value`<sup>Required</sup> <a name="value" id="ng-s3-cicd.WafStack.consumeListReference.parameter.value"></a>

- *Type:* string[]

A tokenized string list reference.

---

###### `strength`<sup>Optional</sup> <a name="strength" id="ng-s3-cicd.WafStack.consumeListReference.parameter.strength"></a>

- *Type:* aws-cdk-lib.ReferenceStrength

The reference strength to use.

Defaults to `BOTH`.

---

##### `consumeReference` <a name="consumeReference" id="ng-s3-cicd.WafStack.consumeReference"></a>

```typescript
import { WafStack } from 'ng-s3-cicd'

WafStack.consumeReference(value: string, strength?: ReferenceStrength)
```

Override the reference strength for a specific cross-stack reference value.

Use this to weaken (or strengthen) an individual reference without
affecting other references to the same resource. For example:

```ts
// producerStack defines an SNS topic
declare const topic: sns.Topic;

// consumerStack subscribes to it with a weak reference,
// so the producer can be torn down without blocking on this consumer
const consumerStack = new Stack(app, 'Consumer', {
  env: { account: '123456789012', region: 'us-east-1' },
});
new sns.Subscription(consumerStack, 'Subscription', {
  topic: sns.Topic.fromTopicArn(consumerStack, 'Topic', Stack.consumeReference(topic.topicArn)),
  endpoint: 'https://example.com/webhook',
  protocol: sns.SubscriptionProtocol.HTTPS,
});
```

###### `value`<sup>Required</sup> <a name="value" id="ng-s3-cicd.WafStack.consumeReference.parameter.value"></a>

- *Type:* string

A tokenized string reference (e.g. `bucket.bucketArn`).

---

###### `strength`<sup>Optional</sup> <a name="strength" id="ng-s3-cicd.WafStack.consumeReference.parameter.strength"></a>

- *Type:* aws-cdk-lib.ReferenceStrength

The reference strength to use.

Defaults to `BOTH`.

---

##### `isStack` <a name="isStack" id="ng-s3-cicd.WafStack.isStack"></a>

```typescript
import { WafStack } from 'ng-s3-cicd'

WafStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="ng-s3-cicd.WafStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="ng-s3-cicd.WafStack.of"></a>

```typescript
import { WafStack } from 'ng-s3-cicd'

WafStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

Will return the closest containing `Stack` or `NestedStack`.

###### `construct`<sup>Required</sup> <a name="construct" id="ng-s3-cicd.WafStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ng-s3-cicd.WafStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#ng-s3-cicd.WafStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#ng-s3-cicd.WafStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#ng-s3-cicd.WafStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#ng-s3-cicd.WafStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#ng-s3-cicd.WafStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#ng-s3-cicd.WafStack.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this Stack deploys to. |
| <code><a href="#ng-s3-cicd.WafStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#ng-s3-cicd.WafStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to its parent. |
| <code><a href="#ng-s3-cicd.WafStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#ng-s3-cicd.WafStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#ng-s3-cicd.WafStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#ng-s3-cicd.WafStack.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#ng-s3-cicd.WafStack.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#ng-s3-cicd.WafStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#ng-s3-cicd.WafStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#ng-s3-cicd.WafStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#ng-s3-cicd.WafStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#ng-s3-cicd.WafStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#ng-s3-cicd.WafStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns its parent stack. |
| <code><a href="#ng-s3-cicd.WafStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#ng-s3-cicd.WafStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |

---

##### `node`<sup>Required</sup> <a name="node" id="ng-s3-cicd.WafStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="ng-s3-cicd.WafStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into an **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other account-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="ng-s3-cicd.WafStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="ng-s3-cicd.WafStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="ng-s3-cicd.WafStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="ng-s3-cicd.WafStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `env`<sup>Required</sup> <a name="env" id="ng-s3-cicd.WafStack.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this Stack deploys to.

---

##### `environment`<sup>Required</sup> <a name="environment" id="ng-s3-cicd.WafStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="ng-s3-cicd.WafStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to its parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="ng-s3-cicd.WafStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="ng-s3-cicd.WafStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="ng-s3-cicd.WafStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="ng-s3-cicd.WafStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The ID of the stack.

---

*Example*

```typescript
// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
```


##### `stackName`<sup>Required</sup> <a name="stackName" id="ng-s3-cicd.WafStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.STACK_NAME` directly.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="ng-s3-cicd.WafStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="ng-s3-cicd.WafStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="ng-s3-cicd.WafStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="ng-s3-cicd.WafStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="ng-s3-cicd.WafStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="ng-s3-cicd.WafStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns its parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="ng-s3-cicd.WafStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="ng-s3-cicd.WafStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---





