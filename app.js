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
}

Store.prototype.custPerHour = function(){
  var customers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  // console.log(customers);
  return customers;
};

Store.prototype.salesByHour = function() {
  var total = 0;
  for(var i = 0; i <14; i++){
    var sales = this.custPerHour() * this.avgCookieSale;
    this.hourlySales.push('<td>' + Math.ceil(sales) + '</td>');
    total += Math.ceil(sales);
  }
  this.hourlySales.push('<td>' + total + '</td>');
};

Store.prototype.render = function(){
  var row = document.createElement('tr');
  row.innerHTML = this.hourlySales.join('');
  table.appendChild(row);
};

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24,1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 2.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 3, 16, 4.6);

var locations = [firstAndPike, seaTac, seattleCenter, capHill, alki];

function getSalesRender(){
  for (var k = 0; k < locations.length; k++){
    locations[k].salesByHour();
    locations[k].render();
  }
}
getSalesRender();

function makeStore(event){
  event.preventDefault();
  var name = event.target.name.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var avgCookieSale = parseInt(event.target.avgCookieSale.value);
  var addStore = new Store(name, minCust, maxCust, avgCookieSale);
  addStore.salesByHour();
  addStore.render();
  console.log('created a store');
  form.reset();
}

form.addEventListener('submit', makeStore);
