var url = "https://api.rootnet.in/covid19-in/stats/history";
var url2 = "https://api.rootnet.in/covid19-in/stats/latest";
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr1 = JSON.parse(this.responseText);
        getAll(myArr1);
    }
}

xmlhttp.open("GET", url2, true);
xmlhttp.send();

function getAll(myArr1)
{
  var india = myArr1.data;
  var summary2 = india.summary;
  total = summary2.total;
  discharged = summary2.discharged;
  console.log(this.total);
  Highcharts.chart('container', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Corona Caes Analysis in India'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
          }
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
              name: 'Confirmed Indian Cases',
              y: summary2.confirmedCasesIndian
          }, {
              name: 'Discharged',
              y: discharged
          },{
            name : 'Confirmed Foreign Cases',
            y:summary2.confirmedCasesForeign
          },
          {
            name:'Deaths',
            y:summary2.deaths
          }]
      }]
  });
}


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr1 = JSON.parse(this.responseText);
        getTimeWiseData(myArr1);
    }

};
xmlhttp.open("GET", url, true);
xmlhttp.send();
var dates = [];
var totalcases = [];

function getTimeWiseData(myArr1)
{
  var data = myArr1.data;
  for(var i=0; i<data.length;i++)
  {
      dates.push(data[i].day);
      var more = data[i].summary;
      totalcases.push(more.total);
  }
}
