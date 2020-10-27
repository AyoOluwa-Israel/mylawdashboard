import React from 'react'
import LineCharts from './LineChart';
import Selection from './Selection';


const rand = () => Math.floor(Math.random() * 25);





  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
    datasets: [ 
      {
        label: 'Closed Cases',
        data: [rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand()],
        borderColor: ['rgba(255, 0,0,0.6)'],
        backgroundColor: ['rgba(255,255,255,0.0)'],
        pointBorderColor: ['rgba(255, 0,0,0.2)'],
      },
      {
        label: 'Sales for 2019 (M)',
        data: [rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand()],
        borderColor: ['rgba(54,162,235,0.6)'],
        backgroundColor: ['rgba(255,255,255,0.0)'],
        pointBorderColor: ['rgba(54,162,235,0.2)'],
      },
      {
        label: 'Active Cases',
        data: [rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand()],
        borderColor: ['rgba(0,255,0,0.6)'],
        backgroundColor: ['rgba(255,255,255,0.0)'],
        pointBorderColor: ['rgba(0,255,0,0.8)'],
      }
    ]
  } 


  const options = {
    title: {
    display : true,
    text: 'Analysis for This month'
    }, 
    scales :{
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 25,
            stepSize: 5
          }
        }
      ]
    }
  }

const input = [
  {
    number: 1,
    data: [rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand()],
    type: 'This Month',
  },
  {
    number: 2,
    data: [rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand()],
    type: 'Last Month',
  },
  {
    number: 3,
    data: [rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand()],
    type: '2 Month Ago',
  },
  {
    number: 4,
    data: [rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand()],
    type: '3 Month Ago',
  },
  {
    number: 5,
    data: [rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand()],
    type: '4 Month Ago',
  },
  {
    number: 6,
    data: [rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand()],
    type: '5 Month Ago',
  },
  {
    number: 7,
    data: [rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand()],
    type: '6 Month Ago',
  },
];

for (var j = 0; j < input.length; j++){

    var ok = input[j].number;
    console.log(ok)

}


const SelectionData = () => {
  return (
    <div>
      <Selection/>
      <LineCharts data={data} options={options} />
    </div>
  )
}

export default SelectionData
