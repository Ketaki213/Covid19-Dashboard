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
function myFunction(myArr){
	//console.log("Hello ",myArr);
	var columnDefs = [
	  {headerName: "State", field: "loc", minWidth:400,},
	  {headerName: "Number", field: "number",minWidth:500}
	];

	var rowData = myArr.data.contacts.regional;
	var gridOptions = {
	  columnDefs: columnDefs,
	  rowData: rowData
};
      gridOptions.rowHeight = 40;
	var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
}
