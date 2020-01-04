'use strict';

/* eslint-disable global-require */

const plugins = [
  require('@hapi/inert'),
  require('@hapi/vision'),
  require('./blipp'),
  require('./router'),
  require('./swagger'),
];

module.exports = server => {
  return server.register(plugins);
};
