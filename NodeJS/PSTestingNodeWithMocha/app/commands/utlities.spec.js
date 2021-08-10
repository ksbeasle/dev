const expect = require('chai').expect;
const utils = require('./utilities');

describe('Utilities Tests', () => {

    // chai hook 
    beforeEach(() => {
        console.log('beforeEach')
    })

    afterEach(() => {
        console.log('afterEach')

    })

    before(() => {
        console.log('before')
    })

    after(() => {
        console.log('after')
    })

    describe('getArgument', () => {
        it('should return the second word when asked for the first parameter', () => {
            let firstArg = utils.getArgument('command arg', 1);

            expect(firstArg).to.be.eq('arg');
        })
        
        it('should return the second word when asked for the second parameter', () => {
            let secondArg = utils.getArgument('command arg1 arg2', 2);

            expect(secondArg).to.be.eq('arg2');
        })

        it('should return the second word when asked for the third parameter', () => {
            let thirdArg = utils.getArgument('command arg1 arg2 arg3', 3);

            expect(thirdArg).to.be.eq('arg3');
        })

        it('should return undefined when parameter does not exist', () => {
            let undefinedArg = utils.getArgument('command arg1 arg2 arg3', 4);

            expect(undefinedArg).to.be.undefined;
        })

        it('should return undefined when only 1 word', () => {
            let undefinedArg1Word = utils.getArgument('command', 3);

            expect(undefinedArg1Word).to.be.undefined;
        })
    })
})