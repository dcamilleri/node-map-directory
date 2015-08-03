'use strict';

var mapDir = require('./lib/map-dir');
var ignoredDirs = require('./lib/utils/ignored-dirs');

module.exports = function(directory, ignoreArgs) {
  var currentDir = directory || process.cwd();
  var toIgnore = ignoreArgs || ignoredDirs;
  return mapDir(currentDir, toIgnore);
};
