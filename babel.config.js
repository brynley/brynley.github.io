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
          '@root': '.',
          '@typings': './src/typings',
          '@styles': './src/styles',
          '@core': './src/core',
          '@components': './src/components',
          '@helpers': './src/helpers',
          '@themes': './src/themes',
          '@testResults': './.testresults',
          '@ff': './tools/uiTests/firefly',
          '@styleguide': './styleguide',
          '@testUtils': './tools/unitTests/jest/utils',
          '@rsg-components': './node_modules/react-styleguidist/lib/client/rsg-components',
          '@uiTests': './tools/uiTests',
        },
      },
    ],
  ],
}