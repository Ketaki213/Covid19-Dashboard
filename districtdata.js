// window.onload = alert(localStorage.getItem('statename'));
// console.log(localStorage['statename']);
// var state = document.location.search.replace(/^.*?\=/,'');
var favoriteMovie = sessionStorage.getItem("statename");
console.log(favoriteMovie);



var url2 = "https://api.covid19india.org/state_district_wise.json";

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr1 = JSON.parse(this.responseText);
       // console.log(myArr1[favoriteMovie]);
        getDistricts(myArr1);
    }

};
xmlhttp.open("GET", url2, true);
xmlhttp.send();




var table = document.getElementById("myTable");
function getDistricts(myArr1){
var districts = myArr1[favoriteMovie];
 var district_data = districts.districtData;
 var count = 1;
//console.log(district_data);
//console.log(district_data[active]+" "+district_data[confirmed]+" "+district_data[deceased]+" "+district_data[recovered]);
 var allPropertyNames = Object.keys(district_data);
 for (var j=0; j<allPropertyNames.length; j++) {
     var name = allPropertyNames[j];
     var value = district_data[name];
      var row = table.insertRow(count);
        count++;
          var cell1 = row.insertCell(0);
         var cell2 = row.insertCell(1);
         var cell3 = row.insertCell(2);
         var cell4 = row.insertCell(3);
         var cell5 = row.insertCell(4);
         //var cell6 = row.insertCell(5);
          cell1.innerHTML = name;
          cell2.innerHTML = value.active;
          cell3.innerHTML = value.confirmed;
          cell4.innerHTML = value.deceased;
          cell5.innerHTML = value.recovered;
          

     console.log(value.active+" "+value.confirmed+" "+value.deceased+" "+value.recovered);
 }
}