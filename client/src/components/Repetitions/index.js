import React from "react";
import { Form } from 'react-bootstrap';



function Repetitions (props) {

  return (
    <Form className="m-3">
    {props.reps.map((rep) => (
        <div key={rep.id} className="mb-3">
        <Form.Check 
            type= 'checkbox'
            label={rep.Chore?.chore}
        />
        </div>
        
    ))}
    </Form>

  );
}

// render(<ToggleButtonGroupControlled />);

export default Repetitions;