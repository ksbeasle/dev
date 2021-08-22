const express = require("express");

const redis = require("redis");
const data = require('./db')
const PORT = process.env.PORT || 3000;

const app = express();
const client = redis.createClient();

let redisMiddleware = (req, res, next) => {
  let key = "mykey" + req.originalUrl || req.url;

  client.get(key, function(err, reply) {
    if (reply) {
      res.send(reply);
      console.log('cached')
      return;
    } else {
      console.log('adding')
      res.sendResponse = res.send;
      res.send = body => {
        client.set(key, JSON.stringify(body));
        res.sendResponse(body);
      };
      next();
    }
  });
};

// --------------------------------------------------------
// create app routes
// --------------------------------------------------------

app.get("/", redisMiddleware, function(req, res) {
  return res.send(data)
});

// --------------------------------------------------------
// Set appliication port
// --------------------------------------------------------

app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});