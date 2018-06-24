let tracery = require('tracery-grammar');
let Twit = require('twit');
require('dotenv').config();

let you_are = require('./you_are.json');
let doing = require('./doing.json');
let with_what = require('./with_what.json');
let in_place = require('./in.json');

const grammar = tracery.createGrammar({
    "you_are": you_are,
    "doing": doing,
    "with_what": with_what,
    "in": in_place,
    "origin": ["You are #you_are# #doing# #with_what# in #in#"],
});

grammar.addModifiers(tracery.baseEngModifiers);

console.log(grammar.flatten('#origin#'));
const tweet = grammar.flatten('#origin#');

const T = new Twit(
    {
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token: process.env.TWITTER_ACCESS_TOKEN,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    }
);

T.post('statuses/update', {status: tweet + " #boardgames"}, (err, data, response) => {
    console.log(data)
});