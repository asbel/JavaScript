var assert = require('chai').assert;
var stand = require('../stand.js');
var add = require('.../add.js');

// Describe, It, Assert uses Mocha's BDD style functions.
describe('Stand', function(){
    
    it('should confirm with player about exiting game', function(){
        var stand = stand(1);
        assert.equal(stand, 1); //EQUAL
    })

    it('should return type number', function(){
        var result = stand(1);
        assert.typeOf(result, 'boolean'); //TYPEOF 
    })
	it('should add the value current cards to total', function(){
		var total = add(20);
		assert.equal(add, 20);
	}
})
// $ npm run test

