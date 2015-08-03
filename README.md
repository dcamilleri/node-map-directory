# node-map-directory
Map directory file structure into a JavaScript object

## Install

[![NPM](https://nodei.co/npm/node-map-directory.png)](https://www.npmjs.com/package/node-map-directory)

```
$ npm install node-map-directory
```

## Usage

```js
var mapDir = require('node-map-directory');
var currentDirMap = mapDir();

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
Default: `['node_modules', 'bower_components']`

The directories and files to exclude from mapping. 

## License

MIT © [Dorian Camilleri](https://github.com/dcamilleri>)

