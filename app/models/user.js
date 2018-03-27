import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  userName: DS.attr('string'),
  password: DS.attr('string'),
  tasks: DS.hasMany('task'),
  projects: DS.hasMany('projects')
});
