module.exports = {
    randomString: function () {

        let tracery = require('tracery-grammar');

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
        return grammar.flatten('#origin#');
    }
}