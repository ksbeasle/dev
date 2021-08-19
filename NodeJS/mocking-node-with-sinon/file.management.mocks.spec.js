const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');
const fileManagement = require('./file.management');


describe('file management mock', () => {


    afterEach(() => {
        sinon.restore()
    })

    it('should call writefilesync', () => {
        const writeMock = sinon.mock(fs);

        writeMock.expects("writeFileSync").once()

        const fileManagement = proxyquire('./file.management', { fs })
        fileManagement.createFile('test.txt')

        writeMock.verify()
    })

    it('create a new file with a number appended if one already exists', () => {
        const writeMock = sinon.mock(fs);

        writeMock.expects("writeFileSync").withArgs('./data/test.txt').throws()

        writeMock.expects("writeFileSync").withArgs('./data/test1.txt').once()

        writeMock.expects("readdirSync").returns(['test.txt']).once()

        const fileManagement = proxyquire('./file.management', { fs })
        fileManagement.createFileSafe('test.txt')

        writeMock.verify()
    })

    it('should never call writeFileSync when no file supplied', () => {
        const writeMock = sinon.mock(fs);

        writeMock.expects("writeFileSync").never()

        const fileManagement = proxyquire('./file.management', { fs })
        try {
            fileManagement.createFileSafe()
        } catch (error) {
            
        }

        writeMock.verify()
    })
    

})