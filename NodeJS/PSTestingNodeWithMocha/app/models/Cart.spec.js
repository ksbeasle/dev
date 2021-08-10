const expect = require('chai').expect;
const Cart = require('./Cart');


describe('Cart', () => {

    describe('addItem', () => {
        let cart;
        let myPart;

        // hook
        beforeEach(() => {
            cart = new Cart();
            myPart = {};
        })

        it('Should have only 1 item and have a quantity of 1', () => {
            
            

            cart.addItem(myPart, 1);

            expect(cart.lineItems).to.have.lengthOf(1)
            expect(cart.lineItems[0].quantity).to.eq(1)
        })

        it('call addItem twice, should add to the already existing part', () => {
            // const cart = new Cart();
            // const myPart = {};

            cart.addItem(myPart, 1);
            cart.addItem(myPart, 1);

            expect(cart.lineItems).to.have.lengthOf(1)
            expect(cart.lineItems[0].quantity).to.eq(2)
        })
    })
})