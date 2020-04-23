var assert = require('chai').assert;
var add = require('../add.js');

describe('Hit', function(){
    
    it('should display the card delt', function(){
        var value = hit(7);
        assert.equal(value, 7); //EQUAL
    })

    it('should return type number', function(){
        var result = hit(5);
        assert.typeOf(result, 'number'); //TYPEOF 
    })
})
// $ npm run test