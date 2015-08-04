var directoryMap = {
  map:
  [
    {
      name: 'src',
      type: 'dir',
      children: [
        {
          name: 'lib',
          type: 'dir',
          children: [
            {
              name: 'main.min',
              extension: '.js',
              type: 'file'
            },
            {
              name: 'main.pretty.long.min',
              extension: '.js',
              type: 'file'
            }
          ]
        },
        {
          name: 'some.lib',
          type: 'dir',
          children: [
            {
              name: 'main',
              extension: '.js',
              type: 'file'
            }
          ]
        }
      ]
    }
  ]
};

module.exports = directoryMap.map;