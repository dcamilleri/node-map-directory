'use strict';

module.exports = function isIgnored(fileName, ignoredDirs) {
  return ignoredDirs.some(function(dir) {
    return dir === fileName;
  });
};