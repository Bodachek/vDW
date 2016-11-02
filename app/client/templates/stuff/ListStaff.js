Template.ListStaff.helpers({

  /**
   * @returns {*} All of the Clients documents.
   */
  staffList: function () {
    return Staff.find();
  }
});

Template.ListStaff.events({
    'click .deleteStaff': function(e){
        e.preventDefault();
        Meteor.call('deleteStaff', this._id);
    }
})