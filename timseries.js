var url = "https://api.rootnet.in/covid19-in/stats/history";
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr1 = JSON.parse(this.responseText);
        getAll(myArr1);
    }
}

function getAll(myArr1)
{
    var total_confirmed = [];
   var daily = myArr1.data;
  for(var i=0;i<daily.length;i++)
  {
    var total1 = daily[i].summary.total;
    total_confirmed.push(total1);
  }

   console.log(total_confirmed);


Highcharts.chart('container', {
    chart: {
        type: 'spline',
        scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
    },
    title: {
        text: 'Wind speed during two days',
        align: 'left'
    },
    subtitle: {
        text: '13th & 14th of February, 2018 at two locations in Vik i Sogn, Norway',
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
            text: 'Wind speed (m/s)'
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
        plotBands: [{ // Light air
            from: 0.3,
            to: 1.5,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'Light air',
                style: {
                    color: '#606060'
                }
            }
        }, { // Light breeze
            from: 1.5,
            to: 3.3,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: 'Light breeze',
                style: {
                    color: '#606060'
                }
            }
        }, { // Gentle breeze
            from: 3.3,
            to: 5.5,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'Gentle breeze',
                style: {
                    color: '#606060'
                }
            }
        }, { // Moderate breeze
            from: 5.5,
            to: 8,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: 'Moderate breeze',
                style: {
                    color: '#606060'
                }
            }
        }, { // Fresh breeze
            from: 8,
            to: 11,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'Fresh breeze',
                style: {
                    color: '#606060'
                }
            }
        }, { // Strong breeze
            from: 11,
            to: 14,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: 'Strong breeze',
                style: {
                    color: '#606060'
                }
            }
        }, { // High wind
            from: 14,
            to: 15,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'High wind',
                style: {
                    color: '#606060'
                }
            }
        }]
    },
    tooltip: {
        valueSuffix: ' m/s'
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
            pointInterval: 7200000, // one hour
            pointStart: Date.UTC(2020, 2, 10, 0, 0, 0)
        }
    },
    series: [{
        name: 'Hestavollane',
        data: total_confirmed
   }],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    }
});
}
xmlhttp.open("GET", url, true);
xmlhttp.send();
