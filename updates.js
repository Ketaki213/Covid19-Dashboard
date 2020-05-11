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
    var element = document.getElementById("updates");
    for(let i=0; i<notifications.length;i++)
    {
        var link_rf = document.createElement("p");
        link_rf.innerHTML = '<div class="animate__animated animate__fadeInDown" class="card-body" style="width:95%; border-radius:10px; background-color:#F2F2F2; margin-left:10px"><p class="card-title">'+notifications[i].title+'</p><a href="'
        +notifications[i].link +'" target="_blank" class="card-link">Open Link</a></div>';
        element.appendChild(link_rf);
    }
}

