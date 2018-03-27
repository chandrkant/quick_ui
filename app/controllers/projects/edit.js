import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		saveProject(){
			var self = this
			self.store.findRecord('project', self.get('project').id).then(function(p) {
		  
		  p.set('p',self.get('project').serialize());

		  p.save().then(function(){
	  	self.transitionToRoute('projects.show', p)
		  }); // => PATCH to '/posts/1'
		});
		}
	}
});
