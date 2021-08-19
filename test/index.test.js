const chai = require('chai');
const mocha = require('mocha');

mocha.describe('Dummy test', function () {
  mocha.it('Always true', function () {
    chai.assert(true);
  });
});
