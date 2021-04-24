const express = require('express');
const cors = require('cors');
const db
const app = express();
// Create models
// TODO: Connect routes
// TODO: Mongo DB

// Logger
const logger = require('tracer').colorConsole({
  format: [
    '{{timestamp}} <{{title}}> {{message}} (method {{method}}() in {{file}} line:{{line}})', // default format
    {
      error:
          '{{timestamp}} <{{title}}> {{message}} (method {{method}}() in {{file}} line:{{line}})\nCall Stack:\n{{stack}}', // error format
    },
  ],
  dateformat: 'HH:MM:ss.L',
  preprocess(data) {
    // eslint-disable-next-line no-param-reassign
    data.title = data.title.toUpperCase();
  },
});

// CORS
app.use(cors());

const serverSetup = async () => {

};

const tearDown = async () => {

};

// Setup DB
serverSetup();

// Teardown DB
tearDown();
// app.router('/')

// Start Application
app.listen(3000);
