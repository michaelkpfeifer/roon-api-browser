import http from 'http';

import express from 'express';
import RoonApi from 'node-roon-api';
import RoonApiBrowse from 'node-roon-api-browse';
import RoonApiStatus from 'node-roon-api-status';
import RoonApiTransport from 'node-roon-api-transport';

let transport;
let browseInstance;

const app = express();
const server = http.createServer(app);

const roon = new RoonApi({
  /* eslint-disable camelcase */
  extension_id: 'com.roon-api-browser-backend.test',
  display_name: 'Roon API Browser Extension',
  display_version: '0.0.0',
  publisher: 'Michael Pfeifer',
  email: 'michael.k.pfeifer@googlemail.com',
  website: 'https://github.com/michaelkpfeifer',

  core_paired: async (core) => {
    transport = core.services.RoonApiTransport;
    browseInstance = new RoonApiBrowse(core);
  },

  core_unpaired: (/* core */) => {},
  /* eslint-enable camelcase */
});

const serviceStatus = new RoonApiStatus(roon);

roon.init_services({
  /* eslint-disable camelcase */
  required_services: [RoonApiTransport, RoonApiBrowse],
  provided_services: [serviceStatus],
  /* eslint-enable camelcase */
});

serviceStatus.set_status('All is good', false);

export { roon, server };
