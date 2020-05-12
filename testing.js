let url5 = "https://api.rootnet.in/covid19-in/stats/testing/history";
let xmlhttp5 = new XMLHttpRequest();
 
xmlhttp5.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr1 = JSON.parse(this.responseText);
        getAll2(myArr1);
    }
}
 
xmlhttp5.open("GET", url5, true);
xmlhttp5.send();
 
function getAll2(myArr1)
{
  let testing_data = myArr1.data;
  let testing_arr = [];
  for(let i=1;i<testing_data.length;i++){
    testing_arr.push(testing_data[i].totalSamplesTested);
  }

  console.log(testing_arr);
  Highcharts.chart('testing', {
    chart: {
        type: 'spline',
        scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
    },
    title: {
        text: 'Total Samples Tested',
        align: 'left'
    },
    xAxis: {
        type: 'datetime',
        labels: {
            overflow: 'justify'
        }
    },
    yAxis: {
        title: {
            text: 'Total Samples Tested'
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
        plotBands: []
    },
    tooltip: {
        valueSuffix: 'tests'
    },
    plotOptions: {
        spline: {
            lineWidth: 4,
            states: {
                hover: {
                    lineWidth: 5
                }
            },
            marker: {
                enabled: false
            },
            pointInterval: 7200000*12, // one hour
            pointStart: Date.UTC(2020, 2, 10, 0, 0, 0)
        }
    },
    series: [{
        name: 'tests',
        data: testing_arr
   }],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    }
});
}