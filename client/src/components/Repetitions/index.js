import React from "react";
import { Form } from 'react-bootstrap';
import { useChoreContext } from "../../utils/GlobalState";
import './style.css';


const formatDate = (timestamp) =>{
  if(!timestamp){
    return "";
  }
  return (new Date(timestamp)).toDateString();
}
function Repetitions (props) {
  const [state, dispatch] = useChoreContext();

  console.log("Props", props.reps)
  return (
    <Form className="m-3">
    {props.reps.map((rep) => {
      const user = state.members.find((user) => user.id === rep.Chore?.UserId);
      return (
        <div key={rep.id} className="mb-3">
        <Form.Check 
            type= 'checkbox'
            label={
              <span>
                <span class="badge badge-pill badge-primary mr-1">{user?.name}</span>
                {rep.Chore?.chore} 
                <span className='rep-date ml-2'>{formatDate(rep.due_date)}</span>
              </span>
            }
        />
        </div>
        
      );
    })}
    </Form>

  );
}

// render(<ToggleButtonGroupControlled />);

export default Repetitions;