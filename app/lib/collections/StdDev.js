stdDev = "StdDev";  // avoid typos, this string occurs many times.

StdDev = new Mongo.Collection(stdDev);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new StdDev record.
   * @param doc The StdDev document.
   */
  addStdDev: function(doc) {
    check(doc, StdDev.simpleSchema());
    StdDev.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a StdDev record.
   * @param doc The StdDev document.
   * @param docID It's ID.
   */
  editStdDev: function(doc, docID) {
    check(doc, StdDev.simpleSchema());
    StdDev.update({_id: docID}, doc);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(stdDev, function () {
    return StdDev.find();
  });
}


/**
 * Create the schema for StdDev
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
StdDev.attachSchema(new SimpleSchema({
  account: {
    label: "Account",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: stdDev,
      placeholder: "Account Name"
    }
  },
  dateOf: {
    label: "Date",
    type: Date(),
    optional: false,
    autoform: {
      group: stdDev,
      placeholder: "Date"
    }
  },
  data: {
    label: "Data",
    type: [String],
    optional: false,
    autoform: {
      group: stdDev,
      placeholder: "Active"
    }
  }   
}));
