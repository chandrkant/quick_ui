// import Base from 'ember-simple-auth/authenticators/base';
import Devise from 'ember-simple-auth/authenticators/devise';
import { isEmpty } from '@ember/utils';
export default Devise.extend({
  serverTokenEndpoint: 'http://localhost:3030/users/sign_in.json',
  authorize(data, block) {
        const accessToken = data.token; //Data is the response returned by the server
        if (!isEmpty(accessToken)) {
            block('Authorization', `Bearer ${accessToken}`);
        }
    }
});
