'use strict';

var mapDir = require('./lib/map-dir');
var ignoredDirs = require('./lib/utils/default-ignored');

module.exports = function(directory, ignoreArgs) {
  var currentDir = directory || process.cwd();
  var toIgnore = ignoreArgs ? ignoreArgs : ignoredDirs;
  return new Promise(function(resolve, reject) {
    try {
      resolve(mapDir(currentDir, toIgnore));
    } catch(error) {
      reject(error);
    }
  });
};