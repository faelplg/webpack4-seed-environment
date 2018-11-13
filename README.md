# webpack4-seed-environment
Webpack 4 - Seed environment


## Installing
To better manage your Node environment, I strongly recommend the [nvm package](https://github.com/creationix/Nvm). It is great to manage multiple node.js versions. Install it globally for best performance.

Before installing the dependencies, make sure that you are using compatible versions of Node. I strongly recommend Node 10.2.1 with `npm` 5.6.0. See [the releases](https://nodejs.org/en/download/releases/).

> The `npm` +6.0 has some memory issues related to `tunnel-agent`. Please avoid this version for now. See [this issue](https://github.com/request/tunnel-agent/issues/41).

Fork the repository and clone it into your environment.

Then run the following command to install the package dependencies:
```
npm install
```

## Running
The next commands are ready to use in your project.

Run the project in development mode served in `localhost:8080`:
```
npm run serve
```
Build the project in neutral mode without minifying js and css files:
```
npm run build:test
```
Build the project in production mode and ready to deploy:
```
npm run build:production
```

## ESLint
ESLint is an open source project originally created by Nicholas C. Zakas in June 2013. Its goal is to provide a pluggable linting utility for JavaScript. [View package](https://eslint.org/).

If you want to make ESLint available to tools that run across all of your projects, they recommend installing ESLint globally. You can do so using npm:
```
npm install -g eslint
```
You should then setup a configuration file. Ignore this if you want to use the .eslintrc.json configuration from this project. If you want to create your own, delete the .eslintrc.json and run the following command:
```
eslint --init
```
You can now run ESLint on any file or directory like this:
```
eslint yourfile.js
```
