'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

module.exports = function(defaults) {
  // var bootstrapCssMap = pickFiles('bower_components/bootstrap/dist/css', {
  //   srcDir: '/',
  //   files: ['bootstrap.css.map'],
  //   destDir: '/assets'
  // });

  var faFonts = pickFiles('bower_components/font-awesome/fonts', {
      srcDir: '/',
      files: ['fontawesome-webfont.eot','fontawesome-webfont.ttf','fontawesome-webfont.svg','fontawesome-webfont.woff'],
      destDir: '/font/fa'
  });
  var alfaFonts = pickFiles('bower_components/font-awesome/fonts', {
      srcDir: '/',
      files: ['fontawesome-webfont.eot','fontawesome-webfont.ttf','fontawesome-webfont.svg','fontawesome-webfont.woff'],
      destDir: '/fonts'
  });
  var alFonts = pickFiles('app/styles/fonts', {
      srcDir: '/',
      include: ['*.woff', '*.ttf', '*.woff2'],
      destDir: '/font/roboto'
  });

  // var jqueryImages= pickFiles('bower_components/jquery-ui/themes/base/images', {
  //     srcDir: '/',
  //     destDir: '/assets/images'
  // });
  let app = new EmberApp(defaults, {
    // Add options here
    name: require('./package.json').name,
    minifyCSS: {
      enabled: true,
      options: {}
    },
  });
  app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
  app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
  app.import('bower_components/font-awesome/css/font-awesome.min.css');
  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree([faFonts,alFonts,alfaFonts]);
};
