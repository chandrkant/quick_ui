import DS from 'ember-data';
const { attr } = DS
export default DS.Model.extend({
  name: attr('string'),
  desc: attr('string'),
  status: attr('boolean'),
  tasks: DS.hasMany('task'),
  user: DS.belongsTo('user')
});
