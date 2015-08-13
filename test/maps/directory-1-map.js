var directoryMap = {
  map:
  [
    {
      name: 'fonts',
      type: 'dir',
      children: [
        {
          name: 'font',
          extension: '.woff',
          type: 'file'
        }
      ]
    },
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
          name: 'app',
          type: 'dir',
          children: [
            {
              name: 'class',
              extension: '.js',
              type: 'file'
            }
          ]
        },
        {
          name: 'main',
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
          name: 'sass',
          type: 'dir',
          children: [
            {
              name: 'partials',
              type: 'dir',
              children: [
                {
                  name: '_component',
                  extension: '.scss',
                  type: 'file'
                }
              ]
            },
            {
              name: 'styles',
              extension: '.scss',
              type: 'file'
            }
          ]
        },
        {
          name: 'styles',
          extension: '.css',
          type: 'file'
        }
      ]
    }
  ]
};

module.exports = directoryMap.map;