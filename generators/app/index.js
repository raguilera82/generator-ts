'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the impressive ' + chalk.red('generator-ts') + ' generator!'
    ));

    done();
  },

  writing: function () {
    this.directory(
      this.templatePath('app'),
      this.destinationPath('app')
    );
    this.directory(
      this.templatePath('dist'),
      this.destinationPath('dist')
    );
    this.directory(
      this.templatePath('test'),
      this.destinationPath('test')
    );
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('config.js'),
      this.destinationPath('config.js')
    );
    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );
    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('index.html')
    );
    this.fs.copy(
      this.templatePath('karma.conf.js'),
      this.destinationPath('karma.conf.js')
    );
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );
    this.fs.copy(
      this.templatePath('tsconfig.json'),
      this.destinationPath('tsconfig.json')
    );
    this.fs.copy(
      this.templatePath('tsd.json'),
      this.destinationPath('tsd.json')
    );
    this.fs.copy(
      this.templatePath('tslint.json'),
      this.destinationPath('tslint.json')
    );
  },

  install: function () {
    this.npmInstall();
    this.runInstall('./node_modules/tsd/build/cli.js');
    this.runInstall('./node_modules/jspm/jspm.js');
  }
});
