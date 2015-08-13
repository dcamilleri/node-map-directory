'use strict';

var mapDir = require('./lib/map-dir');
var ignoredDirs = require('./lib/utils/ignored-dirs');

module.exports = function(directory, ignoreArgs, async) {
  var currentDir = directory || process.cwd();
  var toIgnore = ignoreArgs ? ignoredDirs.concat(ignoreArgs) : ignoredDirs;
  var isAsync = async === undefined;
  if(isAsync) {
    return new Promise(function(resolve, reject) {
      try {
        var map = mapDir(currentDir, toIgnore);
        resolve(map);
      } catch(error) {
        reject(error);
      }
    });
  } else {
    return mapDir(currentDir, toIgnore);
  }
};
