// Data arrays
const countryData = [
  {
    name: 'China',
    tonsOfFoodWaste: 91700000
  },
  {
    name: 'India',
    tonsOfFoodWaste: 68750430
  },
  {
    name: 'United States',
    tonsOfFoodWaste: 20000000
  },
  {
    name: 'Japan',
    tonsOfFoodWaste: 8159350
  },
  {
    name: 'Germany',
    tonsOfFoodWaste: 6263760
  },
  {
    name: 'France',
    tonsOfFoodWaste: 5552340
  },
  {
    name: 'United Kingdom',
    tonsOfFoodWaste: 5199360
  },
  {
    name: 'Russia',
    tonsOfFoodWaste: 4650871
  },
  {
    name: 'Spain',
    tonsOfFoodWaste: 3567231
  },
  {
    name: 'Australia',
    tonsOfFoodWaste: 2546849
  }
]
const tableData = [
  {
    year: 2012,
    loses: 865,
    foodWasted: 1.8
  },
  {
    year: 2013,
    loses: 876,
    foodWasted: 1.8
  },
  {
    year: 2014,
    loses: 887,
    foodWasted: 1.8
  },
  {
    year: 2015,
    loses: 890,
    foodWasted: 1.9
  },
  {
    year: 2016,
    loses: 889,
    foodWasted: 1.9
  },
  {
    year: 2017,
    loses: 900,
    foodWasted: 1.9
  },
  {
    year: 2018,
    loses: 910,
    foodWasted: 2
  },
  {
    year: 2019,
    loses: 937,
    foodWasted: 2.3
  },
  {
    year: 2020,
    loses: 944,
    foodWasted: 2.3
  },
  {
    year: 2021,
    loses: 960,
    foodWasted: 2.3
  },
  {
    year: 2022,
    loses: 980,
    foodWasted: 2.3
  }
]
const foodData = [
  {
    label: 'Households',
    kg: 70,
  },
  {
    label: 'Manufacture of food product and beverages',
    kg: 26,
  },
  {
    label: 'Primary production',
    kg: 14,
  },
  {
    label: 'Resturants and food services',
    kg: 12,
  },
  {
    label: 'Retail and other distribution of food',
    kg: 9,
  },
]



// Tab Code
function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("content-tab");
  for (i = 0; i < x.length; i++) {
    x[i].classList.add('hide')
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    tablinks[i].classList.remove('is-active')
  }
  document.getElementById(tabName).classList.remove('hide')
  evt.currentTarget.classList.add('is-active')

  if (tabName === 'Home') {
    document.body.classList.add('limit-height')
  } else {
    document.body.classList.remove('limit-height')
  }
}


// Form Code
function submitform(evt) {
  evt.preventDefault();
  document.getElementById('surveyForm').classList.add('hide')
  document.getElementById('surveyMessage').classList.remove('hide')
}
document.getElementById('surveyForm').addEventListener('submit', submitform)


/*            Chart Code              */
/* Bar */
const countryLabels = countryData.map(country => country.name)
const countryValues = countryData.map(country => country.tonsOfFoodWaste)
const data = {
  labels: countryLabels,
  datasets: [{
    label: 'Food Waste per country (in tons)',
    data: countryValues,
    backgroundColor: ["#fd7f6f", "#7eb0d5", "#b2e061", "#bd7ebe", "#ffb55a", "#ffee65", "#beb9db", "#fdcce5", "#8bd3c7"],
    hoverOffset: 4
  }]
};

const barConfig = {
  type: 'bar',
  data: data,
};

const chartEl = document.getElementById('barChart')
const barChart = new Chart(
  chartEl,
  barConfig
);

barChart.canvas.style.height = '500px';
barChart.canvas.style.width = '500px';


const foodLabels = foodData.map(food => food.label)
const foodKgs = foodData.map(food => food.kg)
const data2 = {
  labels: foodLabels,
  datasets: [{
    label: 'Food Waste in the EU by main economic sectors (in kg), 2020',
    data: foodKgs,
    backgroundColor: ["#fd7f6f", "#7eb0d5", "#b2e061", "#bd7ebe", "#ffb55a", "#ffee65", "#beb9db", "#fdcce5", "#8bd3c7"],
    hoverOffset: 4
  }]
};

const circleConfig = {
  type: 'pie',
  data: data2,
};

const chartEl2 = document.getElementById('circleChart')
const circleChart = new Chart(
  chartEl2,
  circleConfig
);

circleChart.canvas.style.height = '500px';
circleChart.canvas.style.width = '500px';



function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

const table = document.querySelector("table");
generateTable(table, tableData);