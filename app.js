var timesOfDay = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

function Store(name, minCust, maxCust, avgCookieSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
}

Store.prototype.custPerHour = function(){
  var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  console.log(customers);
  return customers;
};

Store.prototype.salesByHour = function() {
  var hourlySales = [];
  for(var i = 0; i <15; i++){
    var sales = this.custPerHour() * this.avgCookieSale;
    hourlySales.push(Math.ceil(sales));
  }
  var totalSales = 0;
  for(var j = 0; j<15; j++){
    totalSales = hourlySales[j] + totalSales;
  }
  hourlySales.push(totalSales);
  console.log(hourlySales);
  return hourlySales;
};

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24,1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 2.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 3, 16, 4.6);

function createTable(location){
  
}

function createList(location){
  var container = document.createElement('div');
  container.innerHTML = '<h2>' + location.name + '</h2>';
  document.body.appendChild(container);

  var pairsList = [];

  for(var k = 0; k < 16; k++){
    pairsList.push(timesOfDay[k] + location.salesByHour()[k] + ' cookies');
  }

  var list = document.createElement('ul');
  var listArr = [];

  for (var m =0; m < 16; m++) {
    listArr.push('<li>' + pairsList[m] + '</li>');
  }
  var full_list = listArr.join('');
  list.innerHTML = full_list;
  document.body.appendChild(list);
}

createList(firstAndPike);
createList(seaTac);
createList(seattleCenter);
createList(capHill);
createList(alki);
