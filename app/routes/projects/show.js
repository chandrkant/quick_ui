import Route from '@ember/routing/route';

export default Route.extend({
	model(params){
		return this.get('store').findRecord('project', params.id)
	},
	setupController(controller,model){
		controller.set('project',model);
	}
});
