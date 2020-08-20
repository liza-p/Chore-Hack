import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { Col, Row } from '../Grid';



function ToggleButtonGroupControlled() {
  const [value, setValue] = useState([1, 3]);

  const handleChange = (val) => setValue(val);

  return (
    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
        <ToggleButton value={1}>
          Option 1
        </ToggleButton>
        <ToggleButton value={2}>
          Option 2
          </ToggleButton>
        <ToggleButton value={3}>
          Option 3
          </ToggleButton>
    </ToggleButtonGroup>
  );
}

// render(<ToggleButtonGroupControlled />);

export default ToggleButtonGroupControlled;