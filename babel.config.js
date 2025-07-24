module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // IMPORTANTE: Este plugin DEVE ser o último da lista.
      'react-native-reanimated/plugin',
    ],
  };
};