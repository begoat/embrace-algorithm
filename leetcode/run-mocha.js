/**
 * QUESTION=happy yarn run tdd to test files whose path includes `happy`
 */
const Mocha = require('mocha');
const recursive = require('recursive-readdir');

const mocha = new Mocha({
  reporter: 'spec'
});

require('@babel/register');

const filterTestFile = f => f.toLowerCase().includes((process.env.QUESTION || '').toLowerCase());

const baseDir = './src';
recursive(baseDir, function(err, files) {
  if (err) {
    console.err(err);
    return;
  }

  files.filter(function(file) {
    return filterTestFile(file) && file.endsWith('.spec.js');
  })
  .forEach(function(file) {
    mocha.addFile(file);
  });

  // Run the tests.
  mocha.run(function(failures) {
    process.exitCode = failures ? 1 : 0; // exit with non-zero status if there were failures
  });
});
