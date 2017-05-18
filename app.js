//Ideas and help by Edwin DelRio. God among men.


'use strict';

var form = document.getElementById('store-form');
var table = document.getElementById('table');

function Store(name, minCust, maxCust, avgCookieSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.hourlySales = ['<td>' + name + '</td>'];
  this.cleanSales = []; //thinking about using this for daily totals
}

Store.prototype.custPerHour = function(){
  var customers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  // console.log(customers);
  return customers;
};


//pushes the 13 hours in the day, plus a daily total, to Hourly Sales, with the TD tags
Store.prototype.salesByHour = function() {
  var total = 0;
  for(var i = 0; i <14; i++){
    var sales = this.custPerHour() * this.avgCookieSale;
    this.hourlySales.push('<td>' + Math.ceil(sales) + '</td>');
    this.cleanSales.push(Math.ceil(sales));
    total += Math.ceil(sales);
  }
  this.hourlySales.push('<td>' + total + '</td>');
  this.cleanSales.push(total);
};

// renders the store on the page, joins my big array together into a string.
Store.prototype.render = function(){
  var row = document.createElement('tr');
  row.innerHTML = this.hourlySales.join('');
  table.appendChild(row);
};

// existing stores, not needed to add
var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24,1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 2.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 3, 16, 4.6);

var locations = [firstAndPike, seaTac, seattleCenter, capHill, alki]; //thinking about using this for a daily total line

//makes the salesByHour function run so it generates an hourlySales total
function getSalesRender(){
  for (var k = 0; k < 5; k++){
    locations[k].salesByHour();
    locations[k].render();
  }
}
getSalesRender();

//this is the store making function, all of our form fields pushing to an object
function makeStore(event){
  event.preventDefault();
  var name = event.target.name.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var avgCookieSale = parseInt(event.target.avgCookieSale.value);
  var addStore = new Store(name, minCust, maxCust, avgCookieSale);
  addStore.salesByHour();
  addStore.render();
  locations.push(addStore); //experiment for the grand total
  console.log(locations);
  form.reset();
}

form.addEventListener('submit', makeStore);

//oooooooooo experiements, trying to figure out how to create a grand total list at the bottom of my table.
var grandTotal = [];
for (var m = 0; m<15; m++) {
  var hourTotal;
  for (var j = 1; j < location.length; j++){
    hourTotal += locations[j].hourlySales[m];
  }
  grandTotal.push(hourTotal);
}

console.log(grandTotal);

// // console.log(grandTotal);
//
// var grandDataList = '<td>' + 'totals' + '</td>';  //<-- for loop that itterates over the grandTotal array to add to the data array, but with <td>'s
// for (var x = 0; x < 15; x++){
//   grandDataList = grandDataList +'<td>' + grandTotal[x] + '</td>';
// }
//
// data.push(grandDataList);
