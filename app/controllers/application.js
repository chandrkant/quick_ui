import Controller from '@ember/controller';
// import { inject } from '@ember/service';
export default Controller.extend({
	session: Ember.inject.service('session'),
	actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
