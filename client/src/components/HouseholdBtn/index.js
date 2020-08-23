import React from "react";
import { Form } from 'react-bootstrap';



function HouseholdBtn () {

  return (
    <Form>
    {['chore-1', 'chore-2', 'chore-3', 'chore-4'].map((type) => (
        <div key={`Household-${type}`} className="mb-3">
        <Form.Check 
            type= 'checkbox'
            id={`Household-${type}`}
            label={`Household ${type}`}
        />
        </div>
        
    ))}
    </Form>

  );
}

// render(<ToggleButtonGroupControlled />);

export default HouseholdBtn;