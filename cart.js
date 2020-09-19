window.onload = function () {
    var url = document.location.href,
    params = url.split('?')[1].split('&'),
    data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    var table = document.getElementById('table');
    var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);
    
    var cell1 = row.insertCell(0);
	cell1.appendChild(document.createTextNode(data.name));

	var cell2 = row.insertCell(1);
	cell2.appendChild(document.createTextNode("1"));

    var cell3 = row.insertCell(2);
    
    cell3.appendChild(document.createTextNode('₹'+data.price+'/g'));
    
    document.getElementsByTagName("body").appendChild(table);
}