// TODO: Is this still needed? Or via Dialogflow?
let Twit = require("twit");
require("dotenv").config();

var tweetLexicon = require("bgjg");

var tweetText = tweetLexicon.generateLexicon();

const T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

console.log(tweetText);

T.post(
  "statuses/update",
  { status: tweetText + " #boardgames" },
  (err, data, response) => {
    console.log(data);
  }
);
