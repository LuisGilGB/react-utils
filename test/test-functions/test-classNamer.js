const {expect} = require('chai');
const {default: {classNamer}} = require('../../dist/index');

describe("Basic classNamer tests", () => {
    it("2 inputs test", () => {
        expect(classNamer('default-classname', 'custom-classname')).to.eql('default-classname custom-classname');
    });
    it("3 inputs test", () => {
        expect(classNamer('default-classname', 'custom-classname', 'status-classname')).to.eql('default-classname custom-classname status-classname');
    });
});