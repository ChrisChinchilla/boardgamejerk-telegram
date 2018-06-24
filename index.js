var tracery = require('tracery-grammar');
var you_are = require('./you_are.json');
var doing = require('./doing.json');
var with_what = require('./with_what.json');
var in_place = require('./in.json');

var grammar = tracery.createGrammar({
    "you_are": you_are,
    "doing": doing,
    "with_what": with_what,
    "in": in_place,
    "origin": ["You are #you_are# #doing# #with_what# in #in#"],
});

grammar.addModifiers(tracery.baseEngModifiers);

console.log(grammar.flatten('#origin#'));
