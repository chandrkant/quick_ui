import DS from 'ember-data';
const { attr } = DS;
export default DS.Model.extend({
  title: attr('string'),
  created_by: attr('string'),
  status: attr('boolean'),
  project: DS.belongsTo('project'),
  user: DS.belongsTo('user')
});
