import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
   saveProject(){
   	model = this.get('model');
    console.log(model)
   }
	}
});
