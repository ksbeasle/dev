const express = require('express');
const cors = require('cors');

const app = express();
// TODO: Connect routes
// TODO: Mongo

// Logger
const logger = require('tracer').colorConsole({
  format: [
    '{{timestamp}} <{{title}}> {{message}} (in {{file}}:{{line}})', // default format
    {
      error:
          '{{timestamp}} <{{title}}> {{message}} (in {{file}}:{{line}})\nCall Stack:\n{{stack}}', // error format
    },
  ],
  dateformat: 'HH:MM:ss.L',
  preprocess(data) {
    data.title = data.title.toUpperCase();
  },
});

logger.log('hello');
logger.trace('hello', 'world');
logger.debug('hello %s', 'world', 123);
logger.info('hello %s %d', 'world', 123, { foo: 'bar' });
logger.warn('hello %s %d %j', 'world', 123, { foo: 'bar' });
logger.error('hello %s %d %j', 'world', 123, { foo: 'bar' }, [1, 2, 3, 4], Object);

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
