import DS from 'ember-data';
const { attr } = DS
export default DS.Model.extend({
  title: attr('string'),
  created_by: attr('string'),
  status: attr('boolean'),
  tasks: DS.hasMany('task'),
  user: DS.belongsTo('user')
});
