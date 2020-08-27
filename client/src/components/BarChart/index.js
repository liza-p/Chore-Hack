import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import "./style.css"
import { useChoreContext } from "../../utils/GlobalState";


function BarChart () {
  const [state, dispatch] = useChoreContext();
  const completedChores = {}

  for ( var i = 0; i < state.members.length; i++){
    completedChores[state.members[i].id]=0
  };
  for ( i = 0; i < state.repetitions.length; i++){
    if(state.repetitions[i].complete){
      completedChores[state.repetitions[i].UserId]++;
    };
  };
  console.log(completedChores);

const data = {
  labels: state.members.map(member => member.name),

  datasets: [
    {
      label: 'Chores Completed',
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      borderWidth: 1,
      hoverBackgroundColor: '#33B2FF ',
      hoverBorderColor: '#007bff',
      data: state.members.map(member => completedChores[member.id])
    }
  ]
};

  return (
   
      <div style={{ height: 500, width: 800, margin: 'auto'}}>
        <h4>Percentage of Chores Completed Over the Last Week</h4>
        <HorizontalBar data={data} />
      </div>
    )
    
    }

export default BarChart;