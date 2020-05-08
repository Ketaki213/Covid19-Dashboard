


var xmlhttp = new XMLHttpRequest();
var url = "https://api.rootnet.in/covid19-in/contacts";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
var map = new Map();
function myFunction(myArr)
{
	var contacts = myArr.data.contacts.regional;
	//console.log(contacts);
	var daySelect = document.getElementById("dropbtn");
	for(var i=0; i<contacts.length;i++)
	{
		var option = document.createElement("option");
		console.log(contacts[i].loc);
        option.text = contacts[i].loc;
        daySelect.add(option);
        //console.log(state);
        map.set(contacts[i].loc,contacts[i].number);
	}
}

function getHelpline(sel)
{
	console.log(sel.options[sel.selectedIndex].text);
    state = sel.options[sel.selectedIndex].text;
    document.getElementById("number").innerHTML = map.get(state);
}
	//console.log(daySelect.options[daySelect.selectedIndex].text);




