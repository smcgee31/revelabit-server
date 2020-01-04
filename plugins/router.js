'use strict';

const router = require('hapi-router');

module.exports = {
  plugin: router,
  options: {
    routes: 'gateways/**/*.js',
    ignore: 'gateways/validation/**/*.js',
  },
};
