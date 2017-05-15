


var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  custPerHour: function (){
    var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log(customers)
    return customers;
  },
  salesPerHour: function(){
    var sales = this.custPerHour() * this.avgCookieSale;
    console.log(Math.ceil(sales));
    return Math.ceil(sales);
  }

};


var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  custPerHour: function (){
    var perHour = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return perHour;
  }
};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 2.7,
  custPerHour: Math.floor(Math.random() * (maxCust-minCust) + minCust)
};

var capHill = {
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3
};

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6
};

function salmonSalesNumbers() {
  var container = document.createElement('div'); //<div></div>
  container.innerHTML =
}
