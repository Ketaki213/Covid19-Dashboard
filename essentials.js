var xmlhttp = new XMLHttpRequest();
var url = "https://api.covid19india.org/resources/resources.json";
var states_districts = new Map();
var ans = new Map();
var opts = new Map();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

var stateSelect = document.getElementById("states");
var districtSelect = document.getElementById("districts");
var utilitySelect = document.getElementById("utilities");

function myFunction(myArr)
{
	  var utilities = myArr.resources;
    for(var i=0; i<utilities.length;i++)
    {
        if(states_districts.has(utilities[i].state))
        {
            var arr = states_districts.get(utilities[i].state).add(utilities[i].city);
        }
        else
        {
            var arr = new Set();
            arr.add(utilities[i].city);
            states_districts.set(utilities[i].state,arr);
             var option = document.createElement("option");
             option.text = utilities[i].state;
             stateSelect.add(option);
        }

        if(ans.has(utilities[i].state+" "+utilities[i].city+" "+utilities[i].category))
        {
            var d = [utilities[i].nameoftheorganisation,utilities[i].phonenumber];
            var arr = ans.get(utilities[i].state+" "+utilities[i].city+" "+utilities[i].category).add(d);
         }
        else
       {
           var d = [utilities[i].nameoftheorganisation,utilities[i].phonenumber];
           var orgs = new Set();
           orgs.add(d);
           ans.set(utilities[i].state+" "+utilities[i].city+" "+utilities[i].category,orgs);
       }
       if(opts.has(utilities[i].state+" "+utilities[i].city))
       {
         opts.get(utilities[i].state+" "+utilities[i].city).add(utilities[i].category); 
       }
       else
       {
         var o = new Set();
         o.add(utilities[i].category);
         opts.set(utilities[i].state+" "+utilities[i].city,o); 
       }

    }

    stateSelect.addEventListener("change", function() {
           districtSelect.options.length = 1;
           var dists = states_districts.get(stateSelect.value);
             for(var d of dists)
             {
               var option = document.createElement("option"); 
               option.text = d;
               districtSelect.add(option);
             }
             
     });

    districtSelect.addEventListener("change", function() {
           utilitySelect.options.length = 1;
           console.log(stateSelect.value+" "+districtSelect.value);
           var ut_opts = opts.get(stateSelect.value+" "+districtSelect.value);
             for(var d of ut_opts)
             {
               var option = document.createElement("option"); 
               option.text = d;
               utilitySelect.add(option);
             }
     });
    
    document.getElementById("searchbtn").addEventListener("click", function(){
      var search_res = ans.get(stateSelect.value+" "+districtSelect.value+" "+utilitySelect.value);
     var table = document.getElementById("myTable");
      table.innerHTML = "";
      if(search_res)
      {
        var header = table.createTHead();
        header.innerHTML = "<tr><th>Organisation</th><th>Contact Number</th></tr>" 
         var count = 1;
      for(var ele of search_res)
      { 
        var row = table.insertRow(count);
        count++;
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var a = ele;
        cell1.innerHTML = a[0];
        cell2.innerHTML = a[1]; 
      }
      }
      else
      {
        var message = "";
        if(stateSelect.value=="Select a State")
          message+=" State";
        if(districtSelect.value=="Select a City")
        {
          if(message=="")
          message+="City";
        else
          message+=" ,City";
        }
        if(utilitySelect.value=="Select the Essential")
        {
          if(message=="")
            message+="Essential";
          else
          message+=" ,Essential";
        }
        document.getElementById("message").innerHTML = "Please select valid "+message+"*";
      }
      
});    
}

  
  
  
  
