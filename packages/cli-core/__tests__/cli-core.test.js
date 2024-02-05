'use strict';

const cliCore = require('..');
const assert = require('assert').strict;

assert.strictEqual(cliCore(), 'Hello from cliCore');
console.info('cliCore tests passed');
