let url2 = "https://api.covid19india.org/raw_data.json";
let xmlhttp2 = new XMLHttpRequest();

xmlhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let myArr1 = JSON.parse(this.responseText);
      ageData(myArr1);
    }
}


function ageData(myArr1)
{
	let male = 0;
	let female = 0;
	let raw_data = myArr1.raw_data;
	for(let i=0; i<raw_data.length;i++)
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
  Highcharts.chart('age_container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Gender distribution among patients'
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
            data: [
            {
                name: 'Male',
                y: male
            },
            {
                name: 'Female',
                y: female
            }]
        }]
    });

}

xmlhttp2.open("GET", url2, true);
xmlhttp2.send();
