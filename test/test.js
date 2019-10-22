const fs = require('fs');
const path = require('path');

const testFunctionsDir = path.join(__dirname, 'test-functions');

const testFunction = (name) => {
    describe(`Function: ${name}`, () => {
        require(`./test-functions/test-${name}`);
    });
}

describe('----- react-utils tests -----', () => {
    let testFiles = [];

    before((done) => {
        console.log('');
        console.log('Loading tests files...');
        fs.readdir(testFunctionsDir, (err, files) => {
            if (err) {
                return console.log(err);
            }
            console.log('Tests files successfully loaded');
            testFiles = files.filter(fileName => fileName.startsWith('test-') && fileName.endsWith('.js'));
            console.log('');
            done();
        });
    });

    it('Testing js-utils functions...', () => {
        testFiles.forEach(fileName => {
            testFunction(fileName.slice('5', '-3'));
        });
    });
});
