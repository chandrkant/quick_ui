'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  // var bootstrapCssMap = pickFiles('bower_components/bootstrap/dist/css', {
  //   srcDir: '/',
  //   files: ['bootstrap.css.map'],
  //   destDir: '/assets'
  // });

  // var faFonts = pickFiles('bower_components/font-awesome/fonts', {
  //     srcDir: '/',
  //     files: ['Font Awesome 5 Brands-Regular-400.otf','Font Awesome 5 Free-Regular-400.otf','Font Awesome 5 Free-Solid-900.otf','fontawesome-webfont.woff','fontawesome-webfont.woff2'],
  //     destDir: '/fonts'
  // });

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

  return app.toTree();
};
