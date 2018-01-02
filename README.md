# Setup Guide

## dependencies

### Webpack

1. webpack
2. webpack-dev-server
3. path
4. html-webpack-plugin

### Compiler

1. babel-loader
2. babel-core
3. babel-preset-es2015
4. babel-preset-react

### React

1. react
2. react-dom

## Setup steps

### webpack.config.js

1. Create webpack.config.js in the root and add the configuration here.
2. Set the Entry file to read from.
3. Set the output file to read to.
4. Add the babel loaders under the module loaders object(include all js and jsx files and exclude node_modules).

### .babelrc
1. create .babelrc in root.
2. add the babel preset under in a presets array.
