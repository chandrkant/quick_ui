// import Base from 'ember-simple-auth/authenticators/base';
import Devise from 'ember-simple-auth/authenticators/devise';
export default Devise.extend({
  serverTokenEndpoint: 'http://localhost:3030/users/sign_in.json',
});
