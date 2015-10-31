'use strict';

var fs = require('fs');
var join = require('./utils/join');
var isIgnored = require('./utils/is-ignored');

module.exports = function mapDir(directory, ignoredDirs) {
  var dirMap = fs.readdirSync(directory);
  return dirMap
    .map(function(dir) {
      var dirPath = join(directory, dir);
      var stats = fs.lstatSync(dirPath);
      if(!isIgnored(dir, ignoredDirs)) {
        if(stats.isDirectory()) {
          var newDirMap = mapDir(dirPath, ignoredDirs);
          var res = {
            name: dir,
            type: 'dir'
          };
          if(newDirMap.length) {
            res.children = newDirMap;
          }
          return res;
        } else {
          var splits = dir.split('.');
          var extension = '.' + splits[splits.length - 1];
          return {
            name: dir.substring(0, dir.length - extension.length),
            extension: extension,
            type: 'file'
          };
        }
      }
    })
    .filter(function(x) {
      return x !== undefined;
    });
};