Template.ListRoles.helpers({

  /**
   * @returns {*} All of the Roles documents.
   */
  rolesList: function () {
    return Roles.find();
  }
});

Template.ListRoles.events({
    'click .deleteRole': function(e){
        e.preventDefault();
        Meteor.call('deleteRoles', this._id);
    }
})