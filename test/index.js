'use strict';

var should = require('should'); //jshint ignore:line

var soften = require('../lib/index');
var stream = require('stream');

var gulpMock = {};
var task = null;

gulpMock.task = function(name, deps, func) {
  task = func;
};

var configMock = {
  root: __dirname,
  soften: ['**/*.js', '**/*.json', '!./node_modules/**', '!./docs/**'],
  src: ['**/*.js', '!./node_modules/**', '!./docs/**'],
  specs: ['specs/**/*.js'],
  statements_threshold: 90,
  functions_threshold: 100,
  branches_threshold: 100,
  lines_threshold: 80
};

soften(gulpMock, configMock);

describe('Gulp Module Soften', function() {
  it('Should return a function', function() {
    soften.should.be.type('function');
  });

  it('Task should be a function', function() {
    task.should.be.type('function');
  });

  it('Should run and throw an error', function(cb) {
    try{
      task();
    } catch(e) {
      cb();
    }
  });
});
