#!/usr/bin/env node
/*
 * src      : test1.js
 * job      : tests for the HanyuPinyin object
 * git      : https://github.com/pffy/hanyupinyin-ts
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */
const { HanyuPinyin } = require('../.');

var hp = new HanyuPinyin();
const hello = '你好';
console.log('chinese: %s', hello);
console.log('pinyin: %s', hp.setInput(hello));
