clients = "Clients";  // avoid typos, this string occurs many times.

Clients = new Mongo.Collection(clients);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Clients record.
   * @param doc The Clients document.
   */
  addClients: function(doc) {
    check(doc, Clients.simpleSchema());
    Clients.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a Clients record.
   * @param doc The Clients document.
   * @param docID It's ID.
   */
  editClients: function(doc, docID) {
    check(doc, Clients.simpleSchema());
    Clients.update({_id: docID}, doc);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(clients, function () {
    return Clients.find();
  });
}


/**
 * Create the schema for Clients
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Clients.attachSchema(new SimpleSchema({
  account: {
    label: "Account",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: clients,
      placeholder: "Account Name"
    }
  },
  friendlyName: {
    label: "Name",
    type: String,
    optional: false,
    autoform: {
      group: clients,
      placeholder: "Friendly name"
    }
  },
  status: {
    label: "Status",
    type: String,
    optional: false,
    autoform: {
      group: clients,
      placeholder: "Active"
    }
  },
  numbField: {
    label: "Number Field",
    type: Number,
    optional: true,
    autoform: {
      group: clients,
      placeholder: "5"
    }
  }    
}));
