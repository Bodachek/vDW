Template.Home.onRendered(function() {
    
    //Set a default value for building the chart
    Session.set('chartBuild',{
        client: "BigFic-200",
        date: "Mon, 12 Sep 2016"
    });
    
    Session.set('cVol', new clientVolume(Session.get('chartBuild').client, Session.get('chartBuild').date))
    
    var cVol = new clientVolume(Session.get('chartBuild').client, Session.get('chartBuild').date)
    
    volumeLine = new Chartist.Line('#volumeLine', {
      labels: cVol.times,
      series: [{
              name: 'posSTDV',
              data: cVol.posStdDev
          }, {
              name: 'Volume Model',
              data: cVol.model
          }, {
              name: 'negSTDV',
              data: cVol.negStdDev
          }, {
              name: 'actualVolume',
              data: cVol.actual
          }
      ]
    }, {
      fullWidth: true,
      lineSmooth: Chartist.Interpolation.simple({
        divisor: 2
      }),
      series: {
         'actualVolume': {
           showArea: true
         } 
      },
      chartPadding: {
        right: 0,
        left: 0
      },
      showPoint: false,
      axisX: {
          labelInterpolationFnc: function(value, index) {
            return index % 10 === 0 ? value : null;
          },
          offset: 0,
          showGrid: false
      },
      axisY: {
          showLabel: false,
          offset: 0,
          showGrid: false
      }
    });
})



Template.Home.events({
    'change #clientPicker': function(e){
        //Our field chooser is using friendlyName, but we need the account number
        var accountNumber = Clients.findOne({friendlyName : e.target.value}).account
        
        //We want to add this to our chartBuild Session variable
        //which of course calls for mad dickery with it being an object
        var x = Session.get('chartBuild')
        
        x.client = accountNumber
        
        Session.set('chartBuild', x)
        
        //build a new clientVolume object with our new account code
        var cChart = new clientChart(Session.get('chartBuild').client, Session.get('chartBuild').date)
        
        fullChart.update({
            labels: cChart.labels,
            series: cChart.series
        })
        
        previewChart.update({
            labels: cChart.labels,
            series: cChart.series
        })
        
//        if(!Session.get('dataFullShown')){
//          fullChart.update({
//            labels: cChart.labels,
//            series: cChart.series
//          })
//        } else {
//          previewChart.update({
//            labels: cChart.labels,
//            series: cChart.series
//          })            
//        }
    },
    'change #datePicker': function(e){
        //Grab our set date 
        var setDate = e.target.value;
        
        //We want to add this to our chartBuild Session variable
        //which of course calls for mad dickery with it being an object
        var x = Session.get('chartBuild')
        
        x.date = setDate
        
        Session.set('chartBuild', x)
        
        //build a new clientVolume object with our new date
        var cVol = new clientVolume(Session.get('chartBuild').client, Session.get('chartBuild').date)
        
        console.log(cVol)
        
        volumeLine.update(
            {
                labels: cVol.times,
                series: [{
                    name: 'posSTDV',
                    data: cVol.posStdDev
                }, {
                    name: 'Volume Model',
                    data: cVol.model
                }, {
                    name: 'negSTDV',
                    data: cVol.negStdDev
                }, {
                    name: 'actualVolume',
                    data: cVol.actual
                }]
            }
        )
    }
})


Template.Home.helpers({
    dbClients() {
        //grab the unique dateOf values from the database
        var cursor = Clients.find().fetch();
        var distinct = _.uniq(cursor, false, function(d) {return d.friendlyName});
        var dValues = _.pluck(distinct, 'friendlyName');
        
        //Spacebars expects an array of objects for iteration, so let's make one!
        var uniqueValues = []
        
        for(i in dValues){
            uniqueValues.push({ friendlyName: dValues[i]})
        }
        
        //return to use in the Template
        return uniqueValues;
    },
    dbDates() {
        //grab the unique dateOf values from the database
        var cursor = Model.find().fetch();
        var distinct = _.uniq(cursor, false, function(d) {return d.dateOf});
        var dValues = _.pluck(distinct, 'dateOf');
        
        //Spacebars expects an array of objects for iteration, so let's make one!
        var uniqueValues = []
        
        for(i in dValues){
            uniqueValues.push({ dateOf: dValues[i]})
        }
        
        //return to use in the Template
        return uniqueValues;
    }
});




