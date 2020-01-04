/* eslint-disable no-console, no-process-exit */

'use strict';

const Hapi = require('@hapi/hapi');
const log = require('loglevel');
const registerPlugins = require('./plugins');

const server = Hapi.server({
  host: 'localhost',
  port: 3003,
  routes: {
    validate: {
      failAction: async (request, h, error) => {
        log.warn('Validation error:', error.message);
        throw error;
      },
    },
  },
});

async function initialize() {
  try {
    await registerPlugins(server);
    await server.initialize();

    // Check if the file was called directly ex. npm start
    // if it wasn't, then it was required by another file, eg. test file
    /* istanbul ignore next */
    if (!module.parent) {
      await server.start();
      log.info(`Marco-Polo server started...`);
    }

    return server;
  } catch (error) {
    /* istanbul ignore next */
    log.error(error);
    throw error;
  }
}

module.exports = initialize();
