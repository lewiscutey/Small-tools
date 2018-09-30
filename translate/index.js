#!/usr/bin/env node

'use strict';
let request = require('request');
let word = process.argv[2] || 'try once';

request.get('http://fanyi.youdao.com/openapi.do?keyfrom=node-translator&key=2058911035&type=data&doctype=json&version=1.1&q='+ word, function(error, res, body) {
  console.log('get the', word, "is:", JSON.parse(body).translation);
});