import Route from '@ember/routing/route';
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
const { service } = Ember.inject;
export default Route.extend(AuthenticatedRouteMixin, {
  session: service('session'),

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
