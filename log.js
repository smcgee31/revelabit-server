'use strict';

const log = require('loglevel');

if (process.env.NODE_ENV === 'development') log.enableAll();

module.exports = log;
