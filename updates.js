var xmlhttp = new XMLHttpRequest();
var url = "https://api.rootnet.in/covid19-in/notifications";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(myArr)
{
	var notifications = myArr.data.notifications;
    console.log(notifications.length);
    var element = document.getElementById("updates");
    for(var i=0; i<notifications.length;i++)
    {
        var link_rf = document.createElement("p");
        link_rf.innerHTML = '<a href="'+notifications[i].link+'">'+notifications[i].title+'</a><br>';
        element.appendChild(link_rf);
    }
}

