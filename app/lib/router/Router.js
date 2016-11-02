/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() {
      return [Meteor.subscribe("Roles"),Meteor.subscribe("Staff")]; 
  },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/Roles', {
  name: 'Roles'
});

Router.route('/listRoles', {
  name: 'ListRoles'
});

Router.route('/addRoles', {
  name: 'AddRoles'
});

Router.route('/listStaff', {
  name: 'ListStaff'
});

Router.route('/addStaff', {
  name: 'AddStaff'
});


Router.route('/roles/:_id', {
  name: 'EditRoles',
  data: function() { return Roles.findOne(this.params._id); }
});

Router.route('/staff/:_id', {
  name: 'EditStaff',
  data: function() { return Staff.findOne(this.params._id); }
});

