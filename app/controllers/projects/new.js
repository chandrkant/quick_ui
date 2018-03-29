import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		saveProject(){
			var self = this
			var newProject = self.store.createRecord('project',self.get('model').serialize());
			newProject.save().then(function(p){
				self.transitionToRoute('projects.show', p)
			});
		}
	}
});
