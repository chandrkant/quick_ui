import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	namespace: '',
	host: "http://localhost:3030",
	pathForType(){
		return 'users'
	}
});
