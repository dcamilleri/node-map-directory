/* globals describe it */

'use strict';

var expect = require('chai').expect;
var join = require('../lib/utils/join');
var mapDir = require('../index');

describe('Asyncronous API Testing', function() {
  it('should return a valid object tree when a directory is passed', function () {
    var exampleDir = join(__dirname, 'directories/directory-1');
    var dirMap = mapDir(exampleDir, null, false);
    var realDirMap = require('./maps/directory-1-map');

    return mapDir(exampleDir)
      .then(function(asyncDirMap) {
        expect(asyncDirMap).to.deep.equal(realDirMap);
      });
  });

  it('should return an empty array when the directory is empty', function () {
    var exampleDir = join(__dirname, 'directories/empty-directory');
    var dirMap = mapDir(exampleDir, null, false);

    return mapDir(exampleDir)
      .then(function(asyncDirMap) {
        expect(asyncDirMap.length).to.equal(0);
      });
  });

  it('should ignore directories passed as arguments', function () {
    var exampleDir = join(__dirname, 'directories/directory-2');
    var dirMap = mapDir(exampleDir, ['node_modules', 'bower_components', 'idea'], false);
    var realDirMap = require('./maps/directory-2-map');

    return mapDir(exampleDir, ['node_modules', 'bower_components', 'idea'])
      .then(function(asyncDirMap) {
        expect(asyncDirMap).to.deep.equal(realDirMap);
      });
  });

  it('should ignore files passed as arguments', function () {
    var exampleDir = join(__dirname, 'directories/directory-3');
    var dirMap = mapDir(exampleDir, ['index.html', 'travis.yml', '.ignored_file'], false);
    var realDirMap = require('./maps/directory-3-map');

    return mapDir(exampleDir, ['index.html', 'travis.yml', '.ignored_file'])
      .then(function(asyncDirMap) {
        expect(asyncDirMap).to.deep.equal(realDirMap);
      });
  });

  it('should ignore files and directories passed as arguments', function () {
    var exampleDir = join(__dirname, 'directories/directory-4');
    var dirMap = mapDir(exampleDir, ['index.html', 'node_modules'], false);
    var realDirMap = require('./maps/directory-4-map');

    return mapDir(exampleDir, ['index.html', 'node_modules'])
      .then(function(asyncDirMap) {
        expect(asyncDirMap).to.deep.equal(realDirMap);
      });
  });

  it('should get the correct name/extension when several dots in files or directories names', function () {
    var exampleDir = join(__dirname, 'directories/directory-5');
    var dirMap = mapDir(exampleDir, ['index.html', 'gulpfile.js'], false);
    var realDirMap = require('./maps/directory-5-map');

    return mapDir(exampleDir, ['index.html', 'gulpfile.js'])
      .then(function(asyncDirMap) {
        expect(asyncDirMap).to.deep.equal(realDirMap);
      });
  });

  it('should throw an error properly', function () {
    return mapDir('hello')
      .then(
      function() {},
      function(error) {
        expect(error).to.not.be.undefined;
      });
  });
});

