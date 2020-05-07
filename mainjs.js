
var xmlhttp = new XMLHttpRequest();
var url = "https://api.covid19api.com/summary";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function openWin() {
  window.open("states.html","_self");

}


function myFunction(arr) {
	var countries = arr.Countries;
	//console.log(countries);
	var table = document.getElementById("myTable");
    var out = "";
    var i;
    var count = 1;
    for(i = 0; i < countries.length; i++) {
          var row = table.insertRow(count);
          count++;
          var cell1 = row.insertCell(0);
         var cell2 = row.insertCell(1);
         var cell3 = row.insertCell(2);
         var cell4 = row.insertCell(3);
         var cell5 = row.insertCell(4);
         var cell6 = row.insertCell(5);
         var cell7 = row.insertCell(6);
         // var cell8 = row.insertCell(7);
         // var cell9 = row.insertCell(8);
         // var cell10 = row.insertCell(9);
          cell1.innerHTML = countries[i].Country;
         // cell2.innerHTML = countries[i].CountryCode;
          //cell3.innerHTML = countries[i].Slug;
          cell2.innerHTML = countries[i].NewConfirmed;
          cell3.innerHTML = countries[i].TotalConfirmed;
          cell4.innerHTML = countries[i].NewDeaths;
          cell5.innerHTML = countries[i].TotalDeaths;
          cell6.innerHTML = countries[i].NewRecovered;
          cell7.innerHTML = countries[i].TotalRecovered;
          //cell10.innerHTML = countries[i].Date;

        //out += '<h2>'+countries[i].Country +'</h2><br>';
    }
   //document.getElementById("id01").innerHTML = out;


}

