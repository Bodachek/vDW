actual = "Actual";  // avoid typos, this string occurs many times.

Actual = new Mongo.Collection(actual);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Actual record.
   * @param doc The Actual document.
   */
  addActual: function(doc) {
    check(doc, Actual.simpleSchema());
    Actual.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a Actual record.
   * @param doc The Actual document.
   * @param docID It's ID.
   */
  editActual: function(doc, docID) {
    check(doc, Actual.simpleSchema());
    Actual.update({_id: docID}, doc);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(actual, function () {
    return Actual.find();
  });
}


/**
 * Create the schema for Actual
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Actual.attachSchema(new SimpleSchema({
  account: {
    label: "Account",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: actual,
      placeholder: "Account Name"
    }
  },
  dateOf: {
    label: "Date",
    type: Date(),
    optional: false,
    autoform: {
      group: actual,
      placeholder: "Date"
    }
  },
  data: {
    label: "Data",
    type: [String],
    optional: false,
    autoform: {
      group: actual,
      placeholder: "Active"
    }
  }   
}));
