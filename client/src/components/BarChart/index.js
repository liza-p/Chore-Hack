import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import "./style.css"
import { useChoreContext } from "../../utils/GlobalState";


function BarChart () {
  const [state, dispatch] = useChoreContext();
  const completedChores = {};
  const totalChores = {};

  for ( var i = 0; i < state.members.length; i++){
    completedChores[state.members[i].id] = 0;
    totalChores[state.members[i].id] = 0;
  };
  const now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  for ( i = 0; i < state.repetitions.length; i++){
    const repetitionDate = new Date(state.repetitions[i].due_date);
    if (repetitionDate.getTime() < tomorrow.getTime() && (tomorrow.getTime() - repetitionDate.getTime()) <= 7 * 24 * 3600 * 1000) {
      if(state.repetitions[i].complete){
        completedChores[state.repetitions[i].UserId]++;
      }
      totalChores[state.repetitions[i].UserId]++;
    }
  };
  console.log(completedChores);


console.log('state.repetitions', state.repetitions)

const data = {
  labels: state.members.map(member => member.name),

  datasets: [
    {
      label: 'Chores Completed',
      //borderColor: 'none',
      //borderWidth: 1,
      //hoverBackgroundColor: '#33B2FF ',
      //hoverBorderColor: '#007bff',
      data: state.members.map(member => {
        const completed = completedChores[member.id];
        const total = totalChores[member.id];
        if (total === 0) {
          return 0;
        }
        return completed / total;
      }),
      backgroundColor: state.members.map(member => member.color),
    }
  ]
};

  return (
   
      <div style={{ height: 500, width: 800, margin: 'auto'}}>
        <h4>Percentage of Chores Completed Over the Last Week</h4>
        <HorizontalBar
          data={data}
          options={{
            legend: {
              display: false
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    min: 0,
                    max: 1,
                    callback: function (value) {
                      return (value * 100).toFixed(0) + '%'; // convert it to percentage
                    },
                  },
                },
              ]
            }
          }}
        />
      </div>
    )
    
    }

export default BarChart;