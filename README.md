# node-map-directory
Asyncronously map directory file structure into a JavaScript object

## Install

[![NPM](https://nodei.co/npm/node-map-directory.png)](https://www.npmjs.com/package/node-map-directory)

[![Build Status](https://travis-ci.org/dcamilleri/node-map-directory.svg)](https://travis-ci.org/dcamilleri/node-map-directory)

```
$ npm install node-map-directory
```

## Usage

```js
var mapDir = require('node-map-directory');
mapDir('./')
  .then(function(currentDirMap) {
    // some code
  });

/* You will get an array of file and directory objects

  Directory structure
  - currentDir
    - index.html
    - scripts
      - myScript.js

  Output:
  [
    {
      name: 'index',
      extension: '.html',
      type: 'file'
    },
    {
      name: 'scripts',
      type: 'dir',
      children: [
        {
          name: 'myScript',
          extension: '.js',
          type: 'file'
        }
      ]
    }
  ]
*/
```

## API

### mapDir(directory, toIgnore)

#### options

##### directory

Type: `String`  
Default: `./`

The root directory to get the map from.

##### toIgnore

Type: `array`  
Default: `['node_modules', 'bower_components', '.ignored_file']`

The directories and files to exclude from mapping. 

## License

MIT © [Dorian Camilleri](https://github.com/dcamilleri>)

