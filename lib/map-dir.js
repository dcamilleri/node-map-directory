'use strict';

var fs = require('fs');
var join = require('./utils/join');
var isIgnored = require('./utils/is-ignored');

module.exports = function mapDir(directory, ignoredDirs) {
  var dirMap = fs.readdirSync(directory);
  var map =
    dirMap.map(function(dir) {
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
          return {
            name: dir.split('.')[0],
            extension: '.' + dir.split('.')[1],
            type: 'file'
          };
        }
      }
    })
    .filter(function(x) {
      return x !== undefined;
    });
  return map;
};