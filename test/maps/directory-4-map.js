var directoryMap = {
  map:
  [
    {
      name: 'gulpfile',
      extension: '.js',
      type: 'file'
    },
    {
      name: 'src',
      type: 'dir',
      children: [
        {
          name: 'script',
          extension: '.js',
          type: 'file'
        }
      ]
    }
  ]
};

module.exports = directoryMap.map;