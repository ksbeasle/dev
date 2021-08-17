const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');


describe('file management - stubs', () => {

    afterEach(() => {
        sinon.restore()
    })

    it('should write a new file---', () => {
        const writeStub = sinon.stub(fs, 'writeFileSync');
        const fileManagement = proxyquire('./file.management', { fs });

        fileManagement.createFile('test.txt');

        expect(writeStub.callCount).to.equal(1)
    })

    it('should throw an exception', () => {
        const writeStub = sinon.stub(fs, 'writeFileSync');
        writeStub.throws(new Error())
        
        const fileManagement = proxyquire('./file.management', { fs });

        expect(()=> fileManagement.createFile('test.txt')).to.throw();
    })

    it('if test.txt exists create test1.txt', () => {
        const writeStub = sinon.stub(fs, 'writeFileSync');
        const readStub = sinon.stub(fs, "readdirSync");

        const fileManagement = proxyquire('./file.management', { fs })

        writeStub.withArgs('./data/test.txt').throws(new Error())
        writeStub.returns(undefined);
        readStub.returns(['test.txt'])

    })

    // async
    it('getAllfiles should return all files', () => {
        const readStub = sinon.stub(fs, 'readdir');

        const fileManagement = proxyquire('./file.management', { fs })

        readStub.yields(null, ['test.txt'])

        fileManagement.getAllFiles((err, data) => {
            expect(data).to.eql(['test.txt'])
        })

    })
})