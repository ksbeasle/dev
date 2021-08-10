const expect = require('chai').expect;
const should = require('chai').should();
const assert = require('chai').assert;

describe('Some More Tests', () =>{
    it('Pass some', () => {
        let result = true

        expect(result).to.be.true;
        result.should.be.true;
        assert.isTrue(result);
        
    })
})