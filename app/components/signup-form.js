import Component from '@ember/component';

export default Component.extend({
  actions: {
    submit(){
      let user = this.get('user')
      this.attrs.triggerSave(user);
    }
 }
});
