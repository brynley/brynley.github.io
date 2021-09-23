module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/typescript"
  ],
  plugins: [
    "babel-plugin-styled-components",
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@assets': './src/assets',
          '@styles': './src/styles',
          '@components': './src/app/components',
          '@themes': './src/themes',
        },
      },
    ],
  ],
}