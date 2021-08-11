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

            // expect(cart.lineItems).to.have.lengthOf(1)
            // expect(cart.lineItems[0].quantity).to.eq(1)
            // DEEP EQUALS
            expect(cart.lineItems).to.be.eql([{part: {}, quantity: 1}])
        })

        it('call addItem twice, should add to the already existing part', () => {
            // const cart = new Cart();
            // const myPart = {};

            cart.addItem(myPart, 1);
            cart.addItem(myPart, 1);

            expect(cart.lineItems).to.have.lengthOf(1)
            expect(cart.lineItems[0].quantity).to.eq(2)
        })

        it('add same item of different quantities', () => {
            // const cart = new Cart();
            // const myPart = {};

            cart.addItem(myPart, 1);
            cart.addItem(myPart, 3);

            expect(cart.lineItems).to.have.lengthOf(1)
            expect(cart.lineItems[0].quantity).to.eq(4)
        })

        it('add items of different quantities', () => {
            // const cart = new Cart();
            // const myPart = {};

            const myPart2 = {};

            cart.addItem(myPart, 1);
            cart.addItem(myPart, 3);
            cart.addItem(myPart2, 4)

            expect(cart.lineItems).to.have.lengthOf(2)
            expect(cart.lineItems[0].quantity).to.eq(4)
            expect(cart.lineItems[1].quantity).to.eq(4)
        })
    })

    describe('getTotalCost', () => {
        let cart;

        beforeEach(() => {
            cart = new Cart();
        })

        it('should be 0 with no items', () => {
            expect(cart.getTotalCost()).to.eq(0);
        })

        it('should be 5 with 1 item(s) with cost 5', () => {
            const myPart = {cost: 5}
            cart.addItem(myPart, 1)
            expect(cart.getTotalCost()).to.eq(5);
        })

        it('should be 15 with 2 item(s) with cost 5 and cost of 10', () => {
            const myPart = {cost: 5}
            const myPart2 = {cost: 10}
            cart.addItem(myPart, 1)
            cart.addItem(myPart2, 1)
            expect(cart.getTotalCost()).to.eq(15);
        })

        describe('getTotalCost variations', () => {
            let partCost5 = {cost: 5};
            let partCost10 = {cost: 10};
            let empty = [];
            let singleItem = [{part: partCost5, quantity: 1}]
            let multiItems = [{part: partCost5, quantity: 1}, {part: partCost10, quantity: 1}]

            let testVariations = [
                {lineItems: empty, expected: 0},
                {lineItems: singleItem, expected: 5},
                {lineItems: multiItems, expected: 15}
            ]

            testVariations.forEach((test) => {
                it(`should calculate total for ${test.lineItems.length} items`, () => {
                    cart.lineItems = test.lineItems;

                    expect(cart.getTotalCost()).to.eq(test.expected);
                })
            })
        })

    })

    describe('empty', () => {
        let cart;

        beforeEach(() => {
            cart = new Cart()
        })
        
        it('should be empty after we call empty', () => {
            cart.lineItems = [{},{},{}]

            cart.empty()
            // DEEP EQUALS .eql comparison
            expect(cart.lineItems).to.be.eql([])
        })

        // IDENTITY CHECK
        it('should be different array/object after we call empty', () => {
            const ogLineItems = cart.lineItems;

            cart.empty()
            // DEEP EQUALS .eql comparison
            expect(cart.lineItems).to.not.be.eq(ogLineItems)
        })
    })
})

