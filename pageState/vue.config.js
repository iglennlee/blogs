const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    port: 8104,
    disableHostCheck: true,
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'));
  },
};
