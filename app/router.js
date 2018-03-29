import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('projects', function() {
    this.route('new');
    this.route('show',{path: '/show/:id'});
    this.route('edit',{path: '/edit/:id'});
  });

  this.route('tasks', function() {
    this.route('new');
    this.route('show');
    this.route('edit');
  });

  this.route('project', function() {
    this.route('show');
  });
  this.route('login');
  this.route('dashboard');
  this.route('signup');
});

export default Router;
