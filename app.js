var timesOfDay = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

var firstAndPike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  custPerHour: function (){
    var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log(customers);
    return customers;
  },
  salesByHour: function(){ //an array with 15 values in it corresponding to hours in the day, last value is total sales of the day
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
  },
};


var seaTac = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  custPerHour: function (){
    var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log(customers);
    return customers;
  },
  salesByHour: function(){ //an array with 15 values in it corresponding to hours in the day, last value is total sales of the day
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
  },
};


var seattleCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 2.7,
  custPerHour: function (){
    var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log(customers);
    return customers;
  },
  salesByHour: function(){ //an array with 15 values in it corresponding to hours in the day, last value is total sales of the day
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
  },
};

var capHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  custPerHour: function (){
    var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log(customers);
    return customers;
  },
  salesByHour: function(){ //an array with 15 values in it corresponding to hours in the day, last value is total sales of the day
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
  },
};

var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  custPerHour: function (){
    var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log(customers);
    return customers;
  },
  salesByHour: function(){ //an array with 15 values in it corresponding to hours in the day, last value is total sales of the day
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
  },
};


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
