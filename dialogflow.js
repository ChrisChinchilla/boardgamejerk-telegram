"use strict";

const express = require("express"),
  bodyParser = require("body-parser"),
  request = require("request"),
  app = express().use(bodyParser.json()); // creates express http server

// TODO: Refactor correctly
var tweetLexicon = require("./node_modules/bgjg/index.js");

// Sets server port and logs message on success
app.listen(process.env.PORT || 5000, () => console.log("webhook is listening"));

app.post("/webhook", (req, res) => {
  var chat = tweetLexicon.generateLexicon();
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ fulfillmentText: chat }));
});
