roles = "Roles";  // avoid typos, this string occurs many times.

Roles = new Mongo.Collection(roles);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Roles record.
   * @param doc The Roles document.
   */
  addRoles: function(doc) {
    check(doc, Roles.simpleSchema());
    Roles.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a Roles record.
   * @param doc The Roles document.
   * @param docID It's ID.
   */
  editRoles: function(doc, docID) {
    check(doc, Roles.simpleSchema());
    Roles.update({_id: docID}, doc);
  },
    
  deleteRoles: function(docID) {
    Roles.remove({_id: docID});
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(roles, function () {
    return Roles.find();
  });
}


/**
 * Create the schema for Roles
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Roles.attachSchema(new SimpleSchema({
  role: {
    label: "Role",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: roles,
      placeholder: "Role Name"
    }
  },
  department: {
    label: "Department",
    type: String,
    optional: false,
    autoform: {
      group: roles,
      placeholder: "Friendly name"
    }
  },
  status: {
    label: "Status",
    type: String,
    optional: false,
    autoform: {
      group: roles,
      placeholder: "Active"
    }
  },
  priority: {
    label: "Priority",
    type: Number,
    optional: true,
    autoform: {
      group: roles,
      placeholder: "0"
    }
  }    
}));
