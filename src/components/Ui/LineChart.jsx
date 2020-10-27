import React from 'react'
import { Line } from 'react-chartjs-2'

function LineCharts ({ data, options }) {
  
    return (
      <Line data={data} options={options} />
    )

}

export default LineCharts
