var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(sales, taxRates) {
  var companyData = new Object;

  for (var i = 0; i < sales.length; i++) {
    if (!companyData.hasOwnProperty(sales[i]['name'])) {
      companyData[sales[i]['name']] = {
        totalSales: arraySum(sales[i]['sales']),
        totalTaxes: arraySum(sales[i]['sales'])*taxRates[sales[i]['province']]
      };
    } else {
      companyData[sales[i]['name']].totalSales += arraySum(sales[i]['sales']);
      companyData[sales[i]['name']]['totalTaxes'] += arraySum(sales[i]['sales'])*taxRates[sales[i]['province']];
    }
  }

  return companyData;
}

function arraySum(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

console.log(results);