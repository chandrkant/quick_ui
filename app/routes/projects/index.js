import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return this.get('store').findAll('project');
	},
	actions: {
		doDelete(project){
			var self = this;
			self.store.findRecord('project', project.id,{ backgroundReload: false }).then(function(p) {
				p.deleteRecord();
				p.save();
			})
		}
	}
});
