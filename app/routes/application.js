import Route from '@ember/routing/route';
import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
const { service } = Ember.inject;
export default Route.extend(ApplicationRouteMixin,{
  session: service('session'),
  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
