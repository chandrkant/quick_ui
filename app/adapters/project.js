import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	namespace: '',
	host: "http://localhost:3030",
	pathForType(){
		return 'projects'
	}
});
