const {expect} = require('chai');
const {classNamerLight} = require('../../dist/index');

describe("Basic classNamerLight tests", () => {
    it("2 inputs test", () => {
        expect(classNamerLight('default-classname', 'custom-classname')).to.eql('default-classname custom-classname');
    });
    it("3 inputs test", () => {
        expect(classNamerLight('default-classname', 'custom-classname', 'status-classname')).to.eql('default-classname custom-classname status-classname');
    });
});