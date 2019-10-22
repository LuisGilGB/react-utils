const {expect} = require('chai');
const {classNamer} = require('../../src/index');

it("Basic classNamer test", () => {
    expect(classNamer('defaultClassName', 'customClassName')).to.eql('defaultClassName customClassName');
});