import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return this.get('store').createRecord('project');
	},
	// actions: {
 //   saveProject(project){
	// 	 var newProject = this.store.createRecord('project',this.get('currentModel').serialize());
	// 	 newProject.save();
	// 	 }
 //   }
});
