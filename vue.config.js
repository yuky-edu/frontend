module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: 'src/views/index/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Yuky - Arnav project',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    host: {
        // entry for the page
        entry: 'src/views/host/main.js',
        // the source template
        template: 'public/host.html',
        // output as dist/host/index.html
        filename: 'host/index.html',
        // when using title option,
        // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Host - Yuky',
        // chunks to include on this page, by default includes
        // extracted common chunks and vendor chunks.
        chunks: ['chunk-vendors', 'chunk-common', 'host']
    },
    play: {
        // entry for the page
        entry: 'src/views/play/main.js',
        // the source template
        template: 'public/play.html',
        // output as dist/play/index.html
        filename: 'play/index.html',
        // when using title option,
        // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Join - Yuky',
        // chunks to include on this page, by default includes
        // extracted common chunks and vendor chunks.
        chunks: ['chunk-vendors', 'chunk-common', 'play']
    },
  },
  // runtimeCompiler: true,
  // transpileDependencies: [
  // 	'vuetify'
  // ],
  lintOnSave: false,
  devServer: {
    // host: '0.0.0.0',
    host: '192.168.137.1',
  },
}
