import React, { Component } from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import "./style.css"

function BarChart () {

const data = {
  labels: ['Sierra', 'Liza', 'Hannah', 'Ayla'],
  datasets: [
    {
      label: 'Chores Completed',
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      borderWidth: 1,
      hoverBackgroundColor: '#33B2FF ',
      hoverBorderColor: '#007bff',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
// export default React.createClass({
//   displayName: 'BarExample',

  return (
   
      <div style={{ height: 500, width: 800}}>
        <h5>Percentace of Chores Completed Over the Last Week</h5>
        <HorizontalBar data={data} />
      </div>
    )
    

// });
    }

export default BarChart;