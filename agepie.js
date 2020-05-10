var url2 = "https://api.covid19india.org/raw_data.json";
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr1 = JSON.parse(this.responseText);
      ageData(myArr1);
    }
}


function ageData(myArr1)
{
	var male = 0;
	var female = 0;
	var raw_data = myArr1.raw_data;
	console.log(raw_data);
	for(var i=0; i<raw_data.length;i++)
	{
		if(raw_data[i].gender=='F')
		{
			female++;
		}
		else
		{
			male++;
		}
	}
Highcharts.setOptions({
  colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
    return {
      radialGradient: {
        cx: 0.5,
        cy: 0.3,
        r: 0.7
      },
      stops: [
        [0, color],
        [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
      ]
    };
  })
});

// Build the chart
Highcharts.chart('age_container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Corona Cases Genderwise'
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
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        connectorColor: 'silver'
      }
    }
  },
  series: [{
    name: 'Corona Cases by gender',
    data: [
      { name: 'Male', y: male },
      { name: 'Female', y: female }
    ]
  }]
});

}

xmlhttp.open("GET", url2, true);
xmlhttp.send();
