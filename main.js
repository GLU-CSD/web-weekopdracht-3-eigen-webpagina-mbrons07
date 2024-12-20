

const data = {
  labels: [
    'story',
    'plot',
    'gameplay',
    'characters',
    'voice acting',
    'replayability',
    'music'
  ],
  datasets: [{
    label: 'persona 3 reload',
    data: [90, 90, 75, 80, 90, 75, 95],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }, {
    label: 'persona 4 golden',
    data: [80, 90, 60, 90, 80, 60, 80],
    fill: true,
    backgroundColor: 'rgba(253, 245, 59, 0.2)',
    borderColor: 'rgb(253, 245, 59)',
    pointBackgroundColor: 'rgb(253, 245, 59)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(253, 245, 59)'
  },
   {
    label: 'persona 5 royal',
    data: [90, 90, 100, 90, 85, 90, 100],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};

const config = {
    type: 'radar',
    data: data,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  };
const myRadarChart = new Chart(
    document.getElementById('myRadarChart'),
    config
);