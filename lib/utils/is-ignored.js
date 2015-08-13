'use strict';

module.exports = function isIgnored(fileName, ignoredDirs) {
  for (var i = ignoredDirs.length - 1; i >= 0; i--) {
    if(fileName === ignoredDirs[i]) {
      return true;
    }
  }
  return false;
};