var timesOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  custPerHour: function (){
    var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log(customers)
    return customers;
  },
  salesByHour: function(){ //an array with 15 values in it corresponding to hours in the day, last value is total sales of the day
    var hourlySales = [];
    for(var i = 0; i <14; i++){
      var sales = this.custPerHour() * this.avgCookieSale;
      hourlySales.push(Math.ceil(sales));
    }
    var totalSales = 0;
    for(var j = 0; j<14; j++){
      totalSales = hourlySales[j] + totalSales;
    }
    hourlySales.push(totalSales);
    console.log(hourlySales);
    return hourlySales;
  },
};


var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  custPerHour: function (){
    var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log(customers)
    return customers;
  },
  salesByHour: function(){ //an array with 15 values in it corresponding to hours in the day, last value is total sales of the day
    var hourlySales = [];
    for(var i = 0; i <14; i++){
      var sales = this.custPerHour() * this.avgCookieSale;
      hourlySales.push(Math.ceil(sales));
    }
    var totalSales = 0;
    for(var j = 0; j<14; j++){
      totalSales = hourlySales[j] + totalSales;
    }
    hourlySales.push(totalSales);
    console.log(hourlySales);
    return hourlySales;
  },
  }
};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 2.7,
  custPerHour: function (){
    var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log(customers)
    return customers;
  },
  salesByHour: function(){ //an array with 15 values in it corresponding to hours in the day, last value is total sales of the day
    var hourlySales = [];
    for(var i = 0; i <14; i++){
      var sales = this.custPerHour() * this.avgCookieSale;
      hourlySales.push(Math.ceil(sales));
    }
    var totalSales = 0;
    for(var j = 0; j<14; j++){
      totalSales = hourlySales[j] + totalSales;
    }
    hourlySales.push(totalSales);
    console.log(hourlySales);
    return hourlySales;
  },
};

var capHill = {
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  custPerHour: function (){
    var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log(customers)
    return customers;
  },
  salesByHour: function(){ //an array with 15 values in it corresponding to hours in the day, last value is total sales of the day
    var hourlySales = [];
    for(var i = 0; i <14; i++){
      var sales = this.custPerHour() * this.avgCookieSale;
      hourlySales.push(Math.ceil(sales));
    }
    var totalSales = 0;
    for(var j = 0; j<14; j++){
      totalSales = hourlySales[j] + totalSales;
    }
    hourlySales.push(totalSales);
    console.log(hourlySales);
    return hourlySales;
  },
};

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  custPerHour: function (){
    var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log(customers)
    return customers;
  },
  salesByHour: function(){ //an array with 15 values in it corresponding to hours in the day, last value is total sales of the day
    var hourlySales = [];
    for(var i = 0; i <14; i++){
      var sales = this.custPerHour() * this.avgCookieSale;
      hourlySales.push(Math.ceil(sales));
    }
    var totalSales = 0;
    for(var j = 0; j<14; j++){
      totalSales = hourlySales[j] + totalSales;
    }
    hourlySales.push(totalSales);
    console.log(hourlySales);
    return hourlySales;
  },
};
