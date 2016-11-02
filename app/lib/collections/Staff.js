staff = "Staff";  // avoid typos, this string occurs many times.

Staff = new Mongo.Collection(staff);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Staff record.
   * @param doc The Staff document.
   */
  addStaff: function(doc) {
    check(doc, Staff.simpleSchema());
    Staff.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a Staff record.
   * @param doc The Staff document.
   * @param docID It's ID.
   */
  editStaff: function(doc, docID) {
    check(doc, Staff.simpleSchema());
    Staff.update({_id: docID}, doc);
  },
    
  deleteStaff: function(docID) {
    Staff.remove({_id: docID});
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(staff, function () {
    return Staff.find();
  });
}


/**
 * Create the schema for Staff
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Staff.attachSchema(new SimpleSchema({
  account: {
    label: "Account",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: staff,
      placeholder: "Account Name"
    }
  },
  friendlyName: {
    label: "Name",
    type: String,
    optional: false,
    autoform: {
      group: staff,
      placeholder: "Friendly name"
    }
  },
  status: {
    label: "Status",
    type: String,
    optional: false,
    autoform: {
      group: staff,
      placeholder: "Active"
    }
  },
  numbField: {
    label: "Number Field",
    type: Number,
    optional: true,
    autoform: {
      group: staff,
      placeholder: "5"
    }
  }    
}));
