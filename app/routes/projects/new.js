import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return this.get('store').createRecord('project');
	},setupController(model){
    
	},
	actions: {
   saveProject(project){
   	debugger
   	model = this.get('model');
    console.log(model)
   }
	}
});
