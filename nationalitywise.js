var url2 = "https://api.covid19india.org/raw_data.json";
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr1 = JSON.parse(this.responseText);
        ageData(myArr1);
     // getAll(myArr1);
    }
}


function ageData(myArr1)
{
	var male = 0;
	var female = 0;
	var raw_data = myArr1.raw_data;
	console.log(raw_data);
	var map = new Map();
	var nations = [];
	var counts = [];
	for(var i=0; i<raw_data.length;i++)
	{
	   var nation = raw_data[i].nationality;
		
		if(map.has(nation))
		{
           var count = map.get(nation);
           map.set(nation,count+1);
		}
		else
		{
          map.set(nation,1);
          nations.push(nation);
		}
	}

	var get_keys = map.keys();
	for(var ele of get_keys) 
	{
      counts.push(map.get(ele));
    }
	console.log(map);
	console.log(nations);
	console.log(counts);
}