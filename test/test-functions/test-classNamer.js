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
describe("Skip nulls tests", () => {
    it("Null at the beginning", () => {
        expect(classNamer(null, 'default-classname', 'custom-classname')).to.eql('default-classname custom-classname');
    });
    it("Null at the end", () => {
        expect(classNamer('default-classname', 'custom-classname', null)).to.eql('default-classname custom-classname');
    });
    it("Null in the middle", () => {
        expect(classNamer('default-classname', null, 'status-classname')).to.eql('default-classname status-classname');
    });
});
describe("Skip falses tests", () => {
    it("False at the beginning", () => {
        expect(classNamer(false, 'default-classname', 'custom-classname')).to.eql('default-classname custom-classname');
    });
    it("False at the end", () => {
        expect(classNamer('default-classname', 'custom-classname', false)).to.eql('default-classname custom-classname');
    });
    it("False in the middle", () => {
        expect(classNamer('default-classname', false, 'status-classname')).to.eql('default-classname status-classname');
    });
});
describe("ClassNamer with params for conditional adding tests", () => {
    it("2 inputs test with falsy check", () => {
        expect(classNamer('default-classname', {
            className: 'conditional-classname',
            check: false
        })).to.eql('default-classname');
    });
    it("3 inputs test with falsy check", () => {
        expect(classNamer('default-classname', {
            className: 'conditional-classname',
            check: false
        }, 'status-classname')).to.eql('default-classname status-classname');
    });
    it("2 inputs test with truthy check", () => {
        expect(classNamer('default-classname', {
            className: 'conditional-classname',
            check: true
        })).to.eql('default-classname conditional-classname');
    });
    it("3 inputs test with truthy check", () => {
        expect(classNamer('default-classname', {
            className: 'conditional-classname',
            check: true
        }, 'status-classname')).to.eql('default-classname conditional-classname status-classname');
    });
});