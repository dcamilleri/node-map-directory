var directoryMap = {
  map:
  [
    {
      name: 'src',
      type: 'dir',
      children: [
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
              name: 'scripts',
              extension: '.js',
              type: 'file'
            }
          ]
        },
        {
          name: 'styles',
          type: 'dir',
          children: [
            {
              name: 'styles',
              extension: '.css',
              type: 'file'
            }
          ]
        }
      ]
    }
  ]
};

module.exports = directoryMap.map;