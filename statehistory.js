let url6 = "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history";
let xmlhttp4 = new XMLHttpRequest();

xmlhttp4.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myArr1 = JSON.parse(this.responseText);
        getAll3(myArr1);
    }
}

function getAll3(myArr1)
{
    console.log(myArr1)
    let state_histories_map = new Map();
    let state_history = myArr1.data.statewise;
    console.log(state_history)
    for(let i=0;i<state_history.length;i++){
        if(state_histories_map.has(state_history[i].state))
            state_histories_map.get(state_history[i].state).push(state_history[i].confirmed);
        else{
            let curr_state = [];
            curr_state.push(state_history[i].confirmed);
            state_histories_map.set(state_history[i].state ,curr_state);
        }
    }
    console.log(state_histories_map.keys())
/*
Highcharts.chart('state_container', {
    chart: {
        type: 'spline',
        scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
    },
    title: {
        text: 'Corona Cases in States to date',
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
            text: 'Total Corona Cases in States'
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
        plotBands: []
    },
    tooltip: {
        valueSuffix: 'cases'
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
            pointStart: Date.UTC(2020, 2, 14, 0, 0, 0)
        }
    },
    series: [{
        name: 'Total Confirmed Cases',
        data: total_confirmed
   },
   {
    name : "Discharged",
    data:discharged
   },
   {
    name:"Deaths",
    data:deaths
   }],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    }
});*/
}
xmlhttp4.open("GET", url6, true);
xmlhttp4.send();
