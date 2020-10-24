
# Guide to contribute

Read the instructions below for setting up the project locally and pushing a pull request with updates. A very good explanation of how to contribute or collaborate is [Contributors vs Collaborators](https://github.com/CoolProp/CoolProp/wiki/Contributors-vs-Collaborators) by CoolProp. This is a great read for anyone new or as a refresher. 

**Initial Boilerplate taken from [NPM Module Boilerplate](https://github.com/flexdinesh/npm-module-boilerplate)**

# Features

* **ES6/ESNext** - Write _ES6_ code and _Babel_ will transpile it to ES5 for backwards compatibility
* **Test** - _Mocha_ with _Istanbul_ coverage
* **Lint** - Preconfigured _ESlint_ with _Airbnb_ config
* **CI** - _TravisCI_ configuration setup
* **Minify** - Built code will be minified for performance
* **[Prettier](https://prettier.io)** - opinionated code formatter and sample taken from facebook's [create-react-app](https://github.com/facebook/create-react-app/blob/master/.prettierrc)
* **[Parcel](https://parceljs.org/getting_started.html)** - Blazing fast, zero configuration web application bundler. Parcel reads `.babelrc`
* **[David-dm](https://david-dm.org/?success)** - WATCHING YOUR NODE.JS DEPENDENCIES
* **[rimraf](https://www.npmjs.com/package/rimraf)** - The UNIX command rm -rf for node
* **[gh-pages](https://www.npmjs.com/package/gh-pages)** - Publish files to a gh-pages branch on GitHub
* **[shufflejs](https://www.npmjs.com/package/shufflejs)** - Publish files to a gh-pages branch on GitHub
* **[Prop Types](https://reactjs.org/docs/typechecking-with-proptypes.html)** - Typechecking react components
* **[React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction)** - Using boostrap and optionally react boostrap
* **[BEM](http://getbem.com/introduction/)** - Block Element Modifier is a methodology for css class names
* **[JQUERY](https://jquery.com/download/)** - Used for certain operations; may consider removing
* **[babel-plugin-css-modules-transform](https://www.npmjs.com/package/babel-plugin-css-modules-transform)** - compiles css modules for babel

# Commands
- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests with linting and tests only.
- `npm test:only` - Run tests without linting or coverage.
- `npm test:watch` - You can even re-run tests on file changes!
- `npm test:prod` - Run tests with minified code.
- `npm run test:examples` - Test written examples on pure JS for better understanding module usage.
- `npm run text:babel` - Test working babel version. This is important for debuggin error during tests related to babel not being found correctly
- `npm run test:babelv7` - test dependancies for babel 7. Useful for checking if anything is needed.
- `npm run test:jest` - tests react components and shows coverage
- `npm run test:jest-update` - updates react component snapshots
- `npm run lint` - Run ESlint with airbnb-config. Custom rule allows jsx and js files see [here](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)
- `npm run cover` - Get coverage report for your code.
- `npm run build` - Babel will transpile ES6 => ES5 and minify the code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing your module.
- `npm start` - starts dev server and watches for changes in index.html
- `npm run parcel-watch` - only watches for changes in index.ht
- `npm run predeploy` - bundles assets into ./public including source maps. This is useful for deploying the static page but use npm run build instead for creating the npm module for publishing
- `npm run deploy` - deploy ./public to gh-pages at github


# Getting Started Locally

Run one or all of the following

- if you are contributing please follow the steps on the [Contributing Workflow](#Contributing-Workflow) and follow the steps below from your forked repo.
- `git clone <>`
- `npm install`
- `pyenv shell 2.7.14` if you run into npm build errors specifically asking for missing python2. You must have pyenv setup and 2.7.14 installed.
- `npm start` runs parcel dev server at http://127.0.0.1:1234/
- `npm predeeploy` bundles into ./public and its ready to deploy

To update dependancies
- `npm outdated` shows all needed updates
- `npm update` only updates minor versions
- `npm i -g npm-check-updates && ncu` installs, shows all needed updates
- `ncu -u && npm install` and prepares all for updating and install new upgrades
- `npx babel-upgrade or npm run test:babelv7` you may need to check for issues in babel to work with babel 7. Then run `npx babel-upgrade --write --install`

# Testing

This project takes advantage of two libraries because mocha was the default before jest was added. This can be refactor on future updates to just use jest.

##  Via Mocha

Mocha by [default](https://mochajs.org/#the-test-directory) checks in the `./tests/*.sj` directory. 

## Via Jest

Jest by [default](https://jestjs.io/docs/en/configuration#testregex-string--arraystring) checks `(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$`.

 
## Online IDE and Pair Programming
Another option is to setup this project on an online ide. 
- [gitpod.io](gitpod.io) : tested and you can access it by forking the project and using `https://gitpod.io/#https://github.com/user/shufflejs-react-forked`
- [codesandbox](https://codesandbox.io/) : works well for testing the library but has issues syncing the devdependancies and connecting to an existing github repo. See the demo for its implementation.
- [codeanywhere](https://codeanywhere.com/) : not tested but great for pair programming

# Contributing Workflow

- read [Contributors vs Collaborators](https://github.com/CoolProp/CoolProp/wiki/Contributors-vs-Collaborators) by CoolProp for a great intro to this flow
- fork Shufflejs-react
- clone fork locally
- add upstream to git remote `git remote add upstream git@github.com:ar-to/shufflejs-react.git`
- keep fork master sync with updtream `git pull --rebase upstream master` & `git push origin master`
- use topic branches from your fork master to fix bugs or add features. Push them to fork origin and pull request to upstream from github.
- Branch naming convention: anything except master. If the topic is related to a GitHub issue on the Shufflejs-react (upstream) project, then name it topic-# where # is the number of the GitHub issue, i.e. topic-13. You should consider creating an issue on that issue tracker before starting a new topic branch. That way, people will be able to know what you are doing with your topic branch.

# Publishing to NPM

This is normally reserved for the collaborators and owner. This also requires access to the npm account and travisci accounts. 

- ensure npm api token is set as an environment variable inside travisci for all branches to avoid issues during build for missing key
- make necessary updates and add as many commits as needed first
- tag release locally. Via git command works for version control but does not update package.json so a better way is to use `npm version` which will create a new commit and also git tag:
```shell
# %s will be replaces with the next minor patch version so 0.1.1 to 0.1.2
npm version patch -m "Upgrade to %s for initial demo release"
```
- `npm run prepublish` to check lib/ and tests
- push master to github to check CI builds successfully
- push tags to github to trigger npm publish `git push --tags`

# Deploy to Github Page

This is normally reserved for the collaborators and owner. This also requires access to the npm account and travisci accounts. 

- ensure npm api token is set as an environment variable inside travisci for all branches to avoid issues during build for missing key. Key is generated in github settings
- push topic branch, fix issue
- `npm run predeploy` to update public/ so CI/CD can update github page
- merge to master and check build is successful. The deployment to github pages only works on master. 

# Publish & Deploy Summary

This is normally reserved for the collaborators and owner. This also requires access to the npm account and travisci accounts. 

- create topic branch
- run tests `npm run test:all` and for react `npm run test:jest`
- commit
- `npm run prepublish` to check lib/ and tests
- `npm run predeploy` to update public/ so CI/CD can update github page. Only necessary if updating the website
- commit updates if necessary
- push topic branch to remote or merge into master 
- update local master
- `npm version patch -m "Upgrade to %s for initial demo release"` replace patch with minor, major as needed
- `git push origin master`
- `git push origin --tags`

This will update github pages and publish to npm with new version. Its important to leave the push of tags for last and until you are sure that what you are pushing passes all of the tests and even deploys to github correctly. This is why pushing to master helps check this. In case something else happens, you can fix it and then patch tag and start the process again before pushing the tags to publish to npm.

Also, you do not need to publish to npm for every push to master, hense why only for semantic versions (patch, minor, major, etc)