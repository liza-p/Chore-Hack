// import React from 'react';
import React, {Component, state} from 'react'
import {Bar} from 'react-chartjs-2';

class Chart extends Component {

    constructor(props) {
    super(props)
    this.state = {
        labels: ['January', 'February', 'March',
                'April', 'May'],
        datasets: [
            {
            label: 'Rainfall',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
        }]
    }
}

// export default class App extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Household Chores Completed',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
    }
}

export default Chart;