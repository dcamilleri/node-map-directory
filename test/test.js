/* globals describe it */

'use strict';

var expect = require('chai').expect;
var join = require('../lib/utils/join');
var mapDir = require('../index');

describe('API Testing: Generate Directory Map', function() {
  it('should return a valid object tree when a directory is passed', function () {
    var exampleDir = join(__dirname, 'directories/directory-1');
    var dirMap = JSON.stringify(mapDir(exampleDir));
    var realDirMap = require('./maps/directory-1-map');
    expect(dirMap).to.equal(JSON.stringify(realDirMap));
  });

  it('should return an empty array when the directory is empty', function () {
    var exampleDir = join(__dirname, 'directories/empty-directory');
    var dirMap = mapDir(exampleDir);
    expect(dirMap.length).to.equal(0);
  });

  it('should ignore directories passed as arguments', function () {
    var exampleDir = join(__dirname, 'directories/directory-2');
    var dirMap = mapDir(exampleDir, ['node_modules', 'bower_components', 'idea']);
    var realDirMap = require('./maps/directory-2-map');
    expect(JSON.stringify(dirMap)).to.equal(JSON.stringify(realDirMap));
  });

  it('should ignore files passed as arguments', function () {
    var exampleDir = join(__dirname, 'directories/directory-3');
    var dirMap = mapDir(exampleDir, ['index.html', 'travis.yml']);
    var realDirMap = require('./maps/directory-3-map');
    expect(JSON.stringify(dirMap)).to.equal(JSON.stringify(realDirMap));
  });

  it('should ignore files and directories passed as arguments', function () {
    var exampleDir = join(__dirname, 'directories/directory-4');
    var dirMap = mapDir(exampleDir, ['index.html', 'node_modules']);
    var realDirMap = require('./maps/directory-4-map');
    expect(JSON.stringify(dirMap)).to.equal(JSON.stringify(realDirMap));
  });
});