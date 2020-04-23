var assert = require('chai').assert;
var add = require('../add.js');

// Describe, It, Assert uses Mocha's BDD style functions.
describe('Play', function(){
    
    it('should display a list of player names or new player options', function(){
        var player = play("player1");
        assert.equal(player, "player1"); //EQUAL
    })

    it('should return type number', function(){
        var result = add(5);
        assert.typeOf(result, 'number'); //TYPEOF 
    })
})
// $ npm run test

