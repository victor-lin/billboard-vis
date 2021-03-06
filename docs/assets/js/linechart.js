---
---

var hot100LineData = {{ site.data.hot100_2017_top10 | jsonify }}

var settingsLineChart = {
     data: hot100LineData,
     options: {
         legend: {
           display: false,
         },
         responsive: true,
         hover: {
           mode: 'dataset'
         },
         stacked: false,
         scales: {
             xAxes: [
                 {
                     display: true,
                     gridLines: {
                         offsetGridLines: false
                     },
                 }
             ],
             yAxes: [
                 {
                     type: "linear",
                     display: true,
                     position: "right",
                             ticks : {
                         max : 100,
                         min : 1,
                         reverse : true
                     },
                     gridLines: {
                         drawOnChartArea: true
                     },
                 }
             ],
         },
     }
 }
var ctxLineChart = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart.Line(ctxLineChart, settingsLineChart);
