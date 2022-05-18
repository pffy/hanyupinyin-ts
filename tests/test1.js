#!/usr/bin/env node
/*
 * src      : test1.js
 * job      : tests for the generic object
 * git      : https://github.com/pffy/obj-ts
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */
const { SomeObject } = require('../.');

console.log('hello-world?, %s, %s',
  SomeObject.derp.key,
  SomeObject.derp.value);
