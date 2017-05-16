'use strict';

// var timesOfDay = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

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

for (var k = 0; k < locations.length; k++){
  data.push(
    '<td>' + locations[k].name + '</td>' +
    '<td>' + locations[k].hourlySales[0] + '</td>' +
    '<td>' + locations[k].hourlySales[1] + '</td>' +
    '<td>' + locations[k].hourlySales[2] + '</td>' +
    '<td>' + locations[k].hourlySales[3] + '</td>' +
    '<td>' + locations[k].hourlySales[4] + '</td>' +
    '<td>' + locations[k].hourlySales[5] + '</td>' +
    '<td>' + locations[k].hourlySales[6] + '</td>' +
    '<td>' + locations[k].hourlySales[7] + '</td>' +
    '<td>' + locations[k].hourlySales[8] + '</td>' +
    '<td>' + locations[k].hourlySales[9] + '</td>' +
    '<td>' + locations[k].hourlySales[10] + '</td>' +
    '<td>' + locations[k].hourlySales[11] + '</td>' +
    '<td>' + locations[k].hourlySales[12] + '</td>' +
    '<td>' + locations[k].hourlySales[13] + '</td>' +
    '<td>' + locations[k].hourlySales[14] + '</td>'
  );
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

console.log(grandTotal);

data.push(
  '<td>' + 'totals' + '</td>' +
  '<td>' + grandTotal[0] + '</td>' +
  '<td>' + grandTotal[1] + '</td>' +
  '<td>' + grandTotal[2] + '</td>' +
  '<td>' + grandTotal[3] + '</td>' +
  '<td>' + grandTotal[4] + '</td>' +
  '<td>' + grandTotal[5] + '</td>' +
  '<td>' + grandTotal[6] + '</td>' +
  '<td>' + grandTotal[7] + '</td>' +
  '<td>' + grandTotal[8] + '</td>' +
  '<td>' + grandTotal[9] + '</td>' +
  '<td>' + grandTotal[10] + '</td>' +
  '<td>' + grandTotal[11] + '</td>' +
  '<td>' + grandTotal[12] + '</td>' +
  '<td>' + grandTotal[13] + '</td>' +
  '<td>' + grandTotal[14] + '</td>'
);

var new_row;

for (var j = 0; j < data.length; j++) {
  new_row = document.createElement('tr');
  new_row.innerHTML = data[j];
  table.appendChild(new_row);
}
