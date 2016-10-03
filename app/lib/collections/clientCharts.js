clientCharts = "ClientCharts";  // avoid typos, this string occurs many times.

ClientCharts = new Mongo.Collection(clientCharts);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new ClientCharts record.
   * @param doc The ClientCharts document.
   */
  addClientCharts: function(doc) {
    check(doc, ClientCharts.simpleSchema());
    ClientCharts.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a ClientCharts record.
   * @param doc The ClientCharts document.
   * @param docID It's ID.
   */
  editClientCharts: function(doc, docID) {
    check(doc, ClientCharts.simpleSchema());
    ClientCharts.update({_id: docID}, doc);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(clientCharts, function () {
    return ClientCharts.find();
  });
}


/**
 * Create the schema for ClientCharts
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
ClientCharts.attachSchema(new SimpleSchema({
  account: {
    label: "Account",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: clientCharts,
      placeholder: "Account Name"
    }
  },
  dateOf: {
    label: "Date",
    type: String,
    optional: false,
    autoform: {
      group: clientCharts,
      placeholder: "Date"
    }
  },
  data: {
    label: "Data",
    type: Object,
    optional: false,
    autoform: {
      group: clientCharts
    }
  },
      'data.labels': {
        type: Array
      },
          'data.labels.$': {
            type: String
          },
      'data.chartData': {
        label: "ChartData",
        type: Array
      },
          'data.chartData.$': {
            type: Object
          },
            'data.chartData.$.className': {
              type: String
            },
            'data.chartData.$.name': {
              type: String
            },
            'data.chartData.$.data': {
              type: Array
            },
              'data.chartData.$.data.$': {
                type: String
              }
//              'data.chartData.$.class': {
//                type: String
//              },
//              'data.chartData.$.name': {
//                type: String
//              },
//              'data.chartData.$.data': {
//                type: Array
//              },
//              'data.chartData.$.data.$': {
//                type: String
//              }
}));
