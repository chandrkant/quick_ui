import Controller from '@ember/controller';
import Ember from 'ember';
const { service } = Ember.inject;
export default Controller.extend({
  session: service('session'),
  errorMessage: null,
  actions: {
    save(user){
      let newUser = user;
      newUser.save().catch((error) => {
        this.set('errorMessage', error)
      })
      .then(()=>{
        this.get('session')
        .authenticate('authenticator:devise',
          newUser.get('email'), newUser.get('password'))
        .catch((reason) => {
          this.set('errorMessage', reason.error ||reason);
        });
      })
    }
  }
});
