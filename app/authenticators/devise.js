// import Base from 'ember-simple-auth/authenticators/base';
import Devise from 'ember-simple-auth/authenticators/devise';
// export default Base.extend({
//   restore(data) {
//   },

//   authenticate(/*args*/) {
//   },

//   invalidate(data) {
//   }
// });
export default Devise.extend({
  serverTokenEndpoint: 'http://localhost:3030/users/sign_in.json',
  authorize(data, block) {
        const accessToken = data.token; //Data is the response returned by the server
        if (!Ember.isEmpty(accessToken)) {
            block('Authorization', `Bearer ${accessToken}`);
        }
    }
});
