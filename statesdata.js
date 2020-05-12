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
 
  for(i = 0; i < states.length ; i++) {
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
}

document.querySelector("#myTable").addEventListener("click",event => {
    let dataTr = event.target.parentNode;
    let dataRes = dataTr.querySelectorAll("td")[0].innerText;
    sessionStorage.setItem("statename", dataRes);
    window.open("district.html","_self");
});
