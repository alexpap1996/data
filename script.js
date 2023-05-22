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

// Chart Code
const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

const config = {
  type: 'pie',
  data: data,
};


// render init block
const chartEl = document.getElementById('myChart')
const myChart = new Chart(
  chartEl,
  config
);

myChart.canvas.style.height = '500px';
myChart.canvas.style.width = '500px';