//This can be expanded as we have actual data structures

var labels = ['1','2','3','4','5','6']

var testData = [
    ['0','10','0','0','0','0'],
    ['2','2','9','1','4','4'],
    ['3','6','4','6','2','5'],
    ['7','7','4','1','4','4'],
    ['3','6','6','3','2','5'],
    ['2','2','9','9','2','4'],
    ['3','8','8','6','2','5']
]

//This series is used to even out the data, we wont use it going forward
var sSetHeight = {
    className: 'prevSeriesC',
    name: 'three',
    data: testData[0]
}

var sOne = {
    className: 'prevSeriesA',
    name: 'one',
    data: testData[1]
}

var sTwo = {
    className: 'prevSeriesB',
    name: 'two',
    data: testData[2]
}

var sThree = {
    className: 'prevSeriesA',
    name: 'one',
    data: testData[3]
}

var sFour = {
    className: 'prevSeriesB',
    name: 'two',
    data: testData[4]
}

var sFive = {
    className: 'prevSeriesA',
    name: 'one',
    data: testData[5]
}

var sSix = {
    className: 'prevSeriesB',
    name: 'two',
    data: testData[6]
}

var cOne = [sOne,sTwo,sSetHeight]
var cTwo = [sThree,sFour,sSetHeight]
var cThree = [sFive,sSix,sSetHeight]


//prebuild client chart data
var clientChartsSeeds = [
  {account: "BigFic-200", dateOf: "Mon, 12 Sep 2016", data: {labels: labels, chartData: cOne}},
  {account: "BigFic-100", dateOf: "Mon, 12 Sep 2016", data: {labels: labels, chartData: cTwo}},
  {account: "LilFic-200", dateOf: "Mon, 12 Sep 2016", data: {labels: labels, chartData: cThree}},
  {account: "BigFic-200", dateOf: "Sun, 11 Sep 2016", data: {labels: labels, chartData: cOne}},
  {account: "BigFic-100", dateOf: "Sun, 11 Sep 2016", data: {labels: labels, chartData: cTwo}},
  {account: "LilFic-200", dateOf: "Sun, 11 Sep 2016", data: {labels: labels, chartData: cThree}}  
];

/**
 * Initialize the Client Charts collection if empty with seed data.
 */
if (ClientCharts.find().count() === 0) {
  _.each(clientChartsSeeds,  function(clientCharts) {
    ClientCharts.insert(clientCharts);
  });
}