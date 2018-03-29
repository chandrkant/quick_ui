import Controller from '@ember/controller';
// import { inject } from '@ember/service';
import Ember from 'ember';
const { service } = Ember.inject;
export default Controller.extend({
	session: service('session'),
  currentUser: service('current-user'),
	actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
