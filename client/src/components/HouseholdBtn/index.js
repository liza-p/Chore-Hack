import React, { useState } from "react";
import { Form } from 'react-bootstrap';



function HouseholdBtn () {
  const [value, setValue] = useState([1, 3]);

  const handleChange = (val) => setValue(val);

  return (
    <Form>
    {['checkbox', 'checkbox', 'checkbox', 'checkbox'].map((type) => (
        <div key={`Household-${type}`} className="mb-3">
        <Form.Check 
            type={type}
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