// let url1 = "https://api.rootnet.in/covid19-in/stats/history";
let url1 = "https://api.rootnet.in/covid19-in/stats/latest";
let xmlhttp1 = new XMLHttpRequest();

xmlhttp1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myArr1 = JSON.parse(this.responseText);
        getAll(myArr1);
    }
}

xmlhttp1.open("GET", url1, true);
xmlhttp1.send();

function getAll(myArr1)
{
  let india = myArr1.data;
  let summary2 = india.summary;
  total = summary2.total;
  discharged = summary2.discharged;
  Highcharts.chart('container', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Corona Cases Analysis in India'
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

