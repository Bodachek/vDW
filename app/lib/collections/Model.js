model = "Model";  // avoid typos, this string occurs many times.

Model = new Mongo.Collection(model);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Model record.
   * @param doc The Model document.
   */
  addModel: function(doc) {
    check(doc, Model.simpleSchema());
    Model.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a model record.
   * @param doc The Model document.
   * @param docID It's ID.
   */
  editModel: function(doc, docID) {
    check(doc, Model.simpleSchema());
    Model.update({_id: docID}, doc);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(model, function () {
    return Model.find();
  });
}


/**
 * Create the schema for Model
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Model.attachSchema(new SimpleSchema({
  account: {
    label: "Account",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: model,
      placeholder: "Account Name"
    }
  },
  dateOf: {
    label: "Date",
    type: Date(),
    optional: false,
    autoform: {
      group: model,
      placeholder: "Date"
    }
  },
  data: {
    label: "Data",
    type: [String],
    optional: false,
    autoform: {
      group: model,
      placeholder: "Active"
    }
  }   
}));
