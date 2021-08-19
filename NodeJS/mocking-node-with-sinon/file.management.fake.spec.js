const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');
const fileManagement = require('./file.management');


describe.skip('file management fake', () => {


    afterEach(() => {
        sinon.restore()
    })

    it('should create a new file', () => {
        const writeFake = sinon.fake(fs.writeFileSync)

        sinon.replace(fs, "writeFileSync", writeFake)

        const fileManagement = proxyquire("./file.management", { fs })

        fileManagement.createFile("test.txt")

        expect(writeFake.calledWith("./data/test.txt")).to.be.true;
    })

    it('should throw exception if file exists', () => {
        const writeFake = sinon.fake.throws(new Error())

        sinon.replace(fs, "writeFileSync", writeFake)

        const fileManagement = proxyquire("./file.management", { fs })

        // fileManagement.createFile("test.txt")

        expect(() => fileManagement.createFile('test.txt')).to.throw()
    })

    it('should getAllFiles', () => {
        const writeFake = sinon.fake.yields(null, ["test.txt"])

        sinon.replace(fs, "writeFileSync", writeFake)

        const fileManagement = proxyquire("./file.management", { fs })

        // fileManagement.createFile("test.txt")

        fileManagement.getAllFiles((err, data) => {
            expect(data).to.eql(["test.txt"])
        })
    })

})