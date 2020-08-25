import React from "react";
import { Form } from 'react-bootstrap';



function Repetitions (props) {

  return (
    <Form className="m-3">
    {props.reps.map((rep, i) => (
        <div key={i} className="mb-3">
        <Form.Check 
            type= 'checkbox'
            label={rep.chore?.chore}
        />
        </div>
        
    ))}
    </Form>

  );
}

// render(<ToggleButtonGroupControlled />);

export default Repetitions;