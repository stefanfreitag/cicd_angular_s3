#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { NgS3CiCdStack } from '../lib/ng-s3-ci-cd-stack';

const app = new cdk.App();
new NgS3CiCdStack(app, 'NgS3CiCdStack');
