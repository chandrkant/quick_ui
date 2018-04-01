import Route from '@ember/routing/route';
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
const { service } = Ember.inject;

export default Route.extend(AuthenticatedRouteMixin,{
	session: service('session'),
	modelName: 'project',
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
