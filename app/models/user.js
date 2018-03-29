import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  user_name: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  authentication_token: DS.attr('string'),
  tasks: DS.hasMany('task'),
  projects: DS.hasMany('projects')
});
