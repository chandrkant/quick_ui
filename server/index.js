/* eslint-env node */
'use strict';

// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

module.exports = function(app) {
  // const globSync   = require('glob').sync;
  // const mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
  // const proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

  // // Log proxy requests
  // const morgan = require('morgan');
  // app.use(morgan('dev'));

  // mocks.forEach(route => route(app));
  // proxies.forEach(route => route(app));
  var proxy = require('http-proxy-middleware');
  // var apiProxy = proxy({
  //   target: 'http://localhost:3000',
  //   changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
  //   logLevel: 'debug',
  //   formate:'json'
  // });
  // app.use(apiProxy);
  app.use('/api', proxy({target:'http://localhost:3000', changeOrigin:true}));
};
