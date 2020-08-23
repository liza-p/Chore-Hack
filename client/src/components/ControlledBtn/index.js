import React from "react";
import { Form } from 'react-bootstrap';



function ToggleButtonGroupControlled() {
  // const [value, setValue] = useState([1, 3]);


  return (
    <Form className="m-3">
      {['chore-1', 'chore-2', 'chore-3', 'chore-4'].map((type) => (
        <div key={`Chore-${type}`} className="mb-3">
          <Form.Check
            type='checkbox'
            id={`Chore-${type}`}
            label={`Chore ${type}`}
          />
        </div>

      ))}
    </Form>


  );
}


export default ToggleButtonGroupControlled;