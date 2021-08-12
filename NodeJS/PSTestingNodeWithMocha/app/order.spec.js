const order = require('./order');
const expect = require('chai').expect;

describe('order', () => {


    /* TEST ASYNC CODE */
    // it('should call the callback and return true', (done) => {
    //     let cart = {}
    //     let success;

    //     let cb = (p) => {
    //         success = p
    //         expect(success).to.be.true
    //         done()
    //     }

    //     order(cart, cb)

    // })

    /* TEST PROMISES */
    it('should deal with promises', () => {
        let cart = {}

        return order(cart).then(total =>{
            expect(total).to.eq(500)
        })

    })
})