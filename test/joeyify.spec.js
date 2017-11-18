var assert = require('assert');
var should = require('chai').should();
var joeyify = require('../joeyify');

describe('#synonyms', function() {
  it('dot is unchanged', function() {
    joeyify('.').should.equal('.');
  });

  it('quotation is unchanged', function() {
    joeyify('"').should.equal('"');
  });

  it('word is synonym', function() {
    joeyify('computer').should.equal('computing machine');
  });

  it('word ending with dot is synonym ending with dot', function() {
    joeyify('computer.').should.equal('computing machine.');
  });

  it('word ending with comma is synonym ending with comma', function() {
    joeyify('computer,').should.equal('computing machine,');
  });

  it('word starting with uppercase letter should be synonym starting with uppercase letter', function() {
    joeyify('Computer').should.equal('Computing machine');
  });

  it('word starting with uppercase letter and ending with comma should be synonym starting with uppercase letter and ending with comma', function() {
    joeyify('Computer,').should.equal('Computing machine,');
  });

  it('string, which is not a word is unchanged', function() {
    joeyify('qwerty').should.equal('qwerty');
  });

  it('Uppercase string, which is not a word is unchanged', function() {
    joeyify('QWERTY').should.equal('QWERTY');
  });

});
