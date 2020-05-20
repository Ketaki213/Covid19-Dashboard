var url2 = "https://api.rootnet.in/covid19-in/stats/latest";
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr1 = JSON.parse(this.responseText);
    stateData(myArr1);
  }
}

xmlhttp.open("GET", url2, true);
xmlhttp.send();

var curr_states = [];
function stateData(myArr1)
{
 document.getElementById("total_value").innerHTML ='<b>'+ myArr1.data.summary.total+'</b>';
 document.getElementById("confirmedCasesIndian_value").innerHTML ='<b>'+ myArr1.data.summary.confirmedCasesIndian+'</b>';
 document.getElementById("confirmedCasesForeign_value").innerHTML ='<b>'+ myArr1.data.summary.confirmedCasesForeign+'</b>';
 document.getElementById("discharged_value").innerHTML ='<b>'+ myArr1.data.summary.discharged+'</b>';
 document.getElementById("deaths_value").innerHTML ='<b>'+ myArr1.data.summary.deaths+'</b>';
 document.getElementById("confirmedButLocationUnidentified_value").innerHTML ='<b>'+ 
                                                        myArr1.data.summary.confirmedButLocationUnidentified+'</b>';
  var whole =  myArr1.data;
  var states = whole.regional;
  var count = 1;
  var table = document.getElementById("myTable");
   let statemap = new Map();
  for(i = 0; i < states.length ; i++) {
     let d = [states[i].loc,states[i].totalConfirmed];
    statemap.set(states[i].loc,states[i].totalConfirmed);
    var row = table.insertRow(count);
    count++;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = states[i].loc;
    cell2.innerHTML = states[i].confirmedCasesIndian;
    cell3.innerHTML = states[i].discharged;
    cell4.innerHTML = states[i].deaths;
    cell5.innerHTML = states[i].confirmedCasesForeign;
    cell6.innerHTML = states[i].totalConfirmed;
    curr_states.push(states[i].loc);
  }

  let data = [
    ['madhya pradesh', statemap.get("Madhya Pradesh")],
    ['uttar pradesh', statemap.get("Uttar Pradesh")],
    ['karnataka', statemap.get("Karnataka")],
    ['nagaland', statemap.has("Nagaland")?statemap.get("Nagaland"):0],
    ['bihar', statemap.get("Bihar")],
    ['lakshadweep', statemap.has("Lakshadweep")?statemap.get("Lakshadweep"):0],
    ['andaman and nicobar', statemap.get("Andaman and Nicobar Islands")],
    ['assam', statemap.get("Assam")],
    ['west bengal', statemap.get("West Bengal")],
    ['puducherry', statemap.get("Puducherry")],
    ['daman and diu', statemap.has("Daman and Diu")?statemap.get("Daman and Diu"):0],
    ['gujarat', statemap.get("Gujarat")],
    ['rajasthan', statemap.get("Rajasthan")],
    ['dadara and nagar havelli', statemap.has("Dadara and Nagar Havelli")?statemap.get("Dadara and Nagar Havelli"):0],
    ['chhattisgarh', statemap.get("Chhattisgarh")],
    ['tamil nadu', statemap.get("Tamil Nadu")],
    ['chandigarh', statemap.get("Chandigarh")],
    ['punjab', statemap.get("Punjab")],
    ['haryana', statemap.get("Haryana")],
    ['andhra pradesh', statemap.get("Andhra Pradesh")],
    ['maharashtra', statemap.get("Maharashtra")],
    ['himachal pradesh', statemap.get("Himachal Pradesh")],
    ['meghalaya', statemap.get("Meghalaya")],
    ['kerala', statemap.get("Kerala")],
    ['telangana', statemap.get("Telengana")],
    ['mizoram', statemap.get("Mizoram")],
    ['tripura', statemap.get("Tripura")],
    ['manipur', statemap.get("Manipur")],
    ['arunanchal pradesh', statemap.get("Arunachal Pradesh")],
    ['jharkhand', statemap.get("Jharkhand")],
    ['goa', statemap.get("Goa")],
    ['nct of delhi', statemap.get("Delhi")],
    ['odisha', statemap.get("Odisha")],
    ['jammu and kashmir', statemap.get("Jammu and Kashmir")],
    ['sikkim', statemap.has("Sikkim")?statemap.get("Sikkim"):0],
    ['uttarakhand', statemap.get("Uttarakhand")]
];
  console.log(data);
  Highcharts.mapChart('map_container', {
    chart: {
        map: 'countries/in/custom/in-all-disputed'
    },

    title: {
        text: 'Total cases (Statewise)'
    },
 plotOptions: {
    series: {
      point: {
        events: {
          click: function() {
            console.log(this.name);
            sessionStorage.setItem("statename", this.name);
             window.open("district.html","_self");
          }
        }
      }
    }
  },
    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        //min: 0
        minColor: '#ffffff',
        maxColor: '#FF404F'
    },

    series: [{
        data: data,
        name: 'Total Cases',
        states: {
            hover: {
                color: 'red'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});
 // document.getElementByClassName("highcharts-button-box").remove();
}

document.querySelector("#myTable").addEventListener("click",event => {
    let dataTr = event.target.parentNode;
    let dataRes = dataTr.querySelectorAll("td")[0].innerText;
    sessionStorage.setItem("statename", dataRes);
    window.open("district.html","_self");
});
