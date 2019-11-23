const {expect} = require('chai');
const {classNamer} = require('../../dist/index');

describe("Basic classNamer tests", () => {
    it("2 inputs test", () => {
        expect(classNamer('default-classname', 'custom-classname')).to.eql('default-classname custom-classname');
    });
    it("3 inputs test", () => {
        expect(classNamer('default-classname', 'custom-classname', 'status-classname')).to.eql('default-classname custom-classname status-classname');
    });
});
describe("Skip undefineds tests", () => {
    it("Undefined at the beginning", () => {
        expect(classNamer(undefined, 'default-classname', 'custom-classname')).to.eql('default-classname custom-classname');
    });
    it("Undefined at the end", () => {
        expect(classNamer('default-classname', 'custom-classname', undefined)).to.eql('default-classname custom-classname');
    });
    it("Undefined in the middle", () => {
        expect(classNamer('default-classname', undefined, 'status-classname')).to.eql('default-classname status-classname');
    });
});