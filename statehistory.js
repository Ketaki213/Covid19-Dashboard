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
   // console.log(myArr1)
    let state_histories_map = new Map();
    let state_history = myArr1.data.history;
    //console.log(state_history)
    for(let i=0;i<state_history.length;i++){
       // console.log(state_history[i].statewise);
        var states = state_history[i].statewise;
       // console.log(states);
        for(let j=0;j<states.length;j++)
        {
            if(state_histories_map.has(states[j].state))
            {
             state_histories_map.get(states[j].state).push(states[j].confirmed);
            }
           else{
             let curr_state = [];
             curr_state.push(states[j].confirmed);
             state_histories_map.set(states[j].state ,curr_state);
            }
           
        }

    
    }
    var all_states = [];
    
     for(let ele of state_histories_map.keys())
        all_states.push(ele);
    console.log(all_states);

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
            lineWidth: 2,
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
        name: all_states[0],
        data: state_histories_map.get(all_states[0])
   },
   {
        name: all_states[1],
        data: state_histories_map.get(all_states[1])
   },
   {
        name: all_states[2],
        data: state_histories_map.get(all_states[2])
   },
   {
        name: all_states[3],
        data: state_histories_map.get(all_states[3])
   },
   {
        name: all_states[4],
        data: state_histories_map.get(all_states[4])
   },
   {
        name: all_states[5],
        data: state_histories_map.get(all_states[5])
   },
   {
        name: all_states[6],
        data: state_histories_map.get(all_states[6])
   },
   {
        name: all_states[7],
        data: state_histories_map.get(all_states[7])
   },
   {
        name: all_states[8],
        data: state_histories_map.get(all_states[8])
   },
   {
        name: all_states[9],
        data: state_histories_map.get(all_states[9])
   },
   {
        name: all_states[10],
        data: state_histories_map.get(all_states[10])
   },
   {
        name: all_states[11],
        data: state_histories_map.get(all_states[11])
   },
   {
        name: all_states[12],
        data: state_histories_map.get(all_states[12])
   },
   {
        name: all_states[13],
        data: state_histories_map.get(all_states[13])
   },
   {
        name: all_states[14],
        data: state_histories_map.get(all_states[14])
   },
   {
        name: all_states[15],
        data: state_histories_map.get(all_states[15])
   },
   {
        name: all_states[16],
        data: state_histories_map.get(all_states[16])
   },
   {
        name: all_states[17],
        data: state_histories_map.get(all_states[17])
   },
   {
        name: all_states[18],
        data: state_histories_map.get(all_states[18])
   },
   {
        name: all_states[19],
        data: state_histories_map.get(all_states[19])
   },
   {
        name: all_states[20],
        data: state_histories_map.get(all_states[20])
   },
    {
        name: all_states[21],
        data: state_histories_map.get(all_states[21])
   },
    {
        name: all_states[22],
        data: state_histories_map.get(all_states[22])
   },
    {
        name: all_states[23],
        data: state_histories_map.get(all_states[23])
   },
    {
        name: all_states[24],
        data: state_histories_map.get(all_states[24])
   },
    {
        name: all_states[25],
        data: state_histories_map.get(all_states[25])
   },
    {
        name: all_states[26],
        data: state_histories_map.get(all_states[26])
   },
    {
        name: all_states[27],
        data: state_histories_map.get(all_states[27])
   },
    {
        name: all_states[28],
        data: state_histories_map.get(all_states[28])
   },
    {
        name: all_states[29],
        data: state_histories_map.get(all_states[29])
   },
    {
        name: all_states[30],
        data: state_histories_map.get(all_states[30])
   },
    {
        name: all_states[31],
        data: state_histories_map.get(all_states[31])
   },
    {
        name: all_states[32],
        data: state_histories_map.get(all_states[32])
   },
    {
        name: all_states[33],
        data: state_histories_map.get(all_states[33])
   },
    {
        name: all_states[34],
        data: state_histories_map.get(all_states[34])
   },
    {
        name: all_states[35],
        data: state_histories_map.get(all_states[35])
   },
    {
        name: all_states[36],
        data: state_histories_map.get(all_states[36])
   },
    {
        name: all_states[37],
        data: state_histories_map.get(all_states[37])
   }
   ],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    }
});
}
xmlhttp4.open("GET", url6, true);
xmlhttp4.send();
