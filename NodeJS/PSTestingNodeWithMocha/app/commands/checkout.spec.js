let checkout = require('./Checkout');
let Cart = require('../models/Cart');
const expect = require('chai').expect;


describe('Checkout', () => {

    // Test thrown errors
    it('expect checkout to throw an error', () => {
        let cart = new Cart()

        let aThrownError = () => {
            checkout(null, cart)
        }

        expect(aThrownError).to.Throw();
    })
})