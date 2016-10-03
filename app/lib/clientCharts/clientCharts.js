Meteor.startup(function(){

// Build the clientChart class
clientChart = function clientChart(client, date){
   //make sure we passed valid types
    check(client, String);
    check(date, String);
    
   // Add object properties like this
   this.client = client
   this.date = date
   this.labels = ClientCharts.findOne({ $and: [ { account: client }, { dateOf: date } ]}).data.labels
   this.series = ClientCharts.findOne({ $and: [ { account: client }, { dateOf: date } ]}).data.chartData
  } 
})