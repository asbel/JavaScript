var assert = require('chai').assert;
var bet = require('../bet.js');

describe('Bet', function(){
    
    it('should prompt player to insert Bet value', function(){
        var bet = bet(25);
        assert.equal(bet, 25); //EQUAL
    })

    it('should return type number', function(){
        var bet = bet(25);
        assert.typeOf(result, 'number'); //TYPEOF 
    })
})
