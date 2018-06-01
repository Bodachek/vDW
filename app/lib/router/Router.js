/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() {
      return [Meteor.subscribe("Clients"), Meteor.subscribe("Model"), Meteor.subscribe("StdDev"), Meteor.subscribe("Actual"),Meteor.subscribe("ClientCharts")]; 
  },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/list', {
  name: 'ListClients'
});

Router.route('/add', {
  name: 'AddClients'
});


Router.route('/clients/:_id', {
  name: 'EditClients',
  data: function() { return Clients.findOne(this.params._id); }
});
