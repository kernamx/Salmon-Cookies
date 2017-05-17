'use strict';

var thead = document.getElementById('thead');
var headValues = ['', '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 AM', '1:00 PM', '2:00 PM', '3:00 PM','4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', 'daily location totals'];

for (var j = 0; j < headValues.length; j++) {
  new_row = document.createElement('td');
  new_row.innerHTML = headValues[j];
  thead.appendChild(new_row);
}

function Store(name, minCust, maxCust, avgCookieSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.hourlySales = [];
}

Store.prototype.custPerHour = function(){
  var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  // console.log(customers);
  return customers;
};

Store.prototype.salesByHour = function() {
  for(var i = 0; i <14; i++){
    var sales = this.custPerHour() * this.avgCookieSale;
    this.hourlySales.push(Math.ceil(sales));
  }
  var totalSales = 0;
  for(var j = 0; j<this.hourlySales.length; j++){
    totalSales = this.hourlySales[j] + totalSales;
  }
  this.hourlySales.push(totalSales);
  // console.log(this.hourlySales);
  return this.hourlySales;
};

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24,1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 2.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 3, 16, 4.6);

var locations = [firstAndPike, seaTac, seattleCenter, capHill, alki];

for (var z = 0; z < locations.length; z++){ //calls the sales by hour method on all locations, creates a static hourlySales array in each object
  locations[z].salesByHour();
  // console.log('hourlySales by location');
  // console.log(locations[z].hourlySales);
}



var table = document.getElementById('shell');
var data = [];

for (var k = 0; k < locations.length; k++){  //<-- for loop that itterates over the locations to add to the data array, but with <td>'s
  var dataList = '<td>' + locations[k].name + '</td>';
  for (var y = 0; y < 15; y++){ //<-- for loop that itterates over the hourly array to add to the data array, but with <td>'s
    dataList = dataList +'<td>' + locations[k].hourlySales[y] + '</td>';
  }
  data.push(dataList);
}

var grandTotal = [];
for (var m = 0; m<15; m++) {
  grandTotal.push(
  locations[0].hourlySales[m]+
  locations[1].hourlySales[m]+
  locations[2].hourlySales[m]+
  locations[3].hourlySales[m]+
  locations[4].hourlySales[m]
  );
}

// console.log(grandTotal);

var grandDataList = '<td>' + 'totals' + '</td>';  //<-- for loop that itterates over the grandTotal array to add to the data array, but with <td>'s
for (var x = 0; x < 15; x++){
  grandDataList = grandDataList +'<td>' + grandTotal[x] + '</td>';
}

data.push(grandDataList);

var new_row;

for (var j = 0; j < data.length; j++) {
  new_row = document.createElement('tr');
  new_row.innerHTML = data[j];
  table.appendChild(new_row);
}
