const { createMetroConfiguration } = require('expo-yarn-workspaces');

module.exports = {
  ...createMetroConfiguration(__dirname),
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs'],
  },
};