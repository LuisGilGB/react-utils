const {expect} = require('chai');
const {default: {classNamer}} = require('../../dist/index');

it("Basic classNamer test", () => {
    expect(classNamer('defaultClassName', 'customClassName')).to.eql('defaultClassName customClassName');
});