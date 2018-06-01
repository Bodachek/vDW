//Tracking whether the full data context is shown
Session.set('dataFullShown', false)

Tracker.autorun(function () {
    // We don't have a full data window up
    if(!Session.get('dataFullShown')){
        
        //See if any of our preview classes are hidden
        if($('.preview').hasClass('hideAll')){
            
            //If they are we need to remove them
            $('.preview').removeClass('hideAll')
        }
    }
});

Template.DataItem.events({
    'click .preview': function(e){
        var prevID = "#" + e.currentTarget.id;
        
        $(prevID).removeClass("preview").addClass("fullItem");
        
        $('.preview').addClass("hideAll")
        
        Session.set('dataFullShown', true);
    },
    'click .dataNav': function(e){
        var dataID = "#" + e.currentTarget.offsetParent.id;
        
        $(dataID).removeClass("fullItem").addClass("preview")
        
        $('.preview').removeClass("hideAll")
        
        Session.set('dataFullShown', false);
        
        //build a new clientVolume object with our new account code
        var cChart = new clientChart(Session.get('chartBuild').client, Session.get('chartBuild').date)
        
        previewChart.update({
            labels: cChart.labels,
            series: cChart.series
        })
    }
});

Template.DataItem.onRendered(function() {
    var demoChart = new clientChart("BigFic-200", "Mon, 12 Sep 2016")
    console.log(demoChart)
    
    console.log(demoChart.series[1].name)
    //styling the second series in a silly way
    var secondSer = {}
    secondSer[demoChart.series[1].name] = {showArea: true};
    
    console.log(secondSer);
    
    previewChart = new Chartist.Line('#prevChartOneF', {
        labels: demoChart.labels,
        series: demoChart.series}, {
        fullWidth: true,
        lineSmooth: Chartist.Interpolation.simple({
            divisor: 2
        }),
        series: secondSer,
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
    
    fullChart = new Chartist.Line('#prevChartOneP', {
        labels: demoChart.labels,
        series: demoChart.series}, {
        fullWidth: true,
        lineSmooth: Chartist.Interpolation.simple({
            divisor: 2
        }),
        series: secondSer,
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
});