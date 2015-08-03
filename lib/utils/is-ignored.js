'use strict';

module.exports = function isIgnored(fileName, ignoredDirs) {
  var isIg = false;
  for (var i = ignoredDirs.length - 1; i >= 0; i--) {
    if(fileName === ignoredDirs[i]) {
      isIg = true;
      break;
    }
  }
  return isIg;
};