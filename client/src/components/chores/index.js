import React, {useState, useEffect} from 'react';
import {Table } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from "../../utils/API";

//function to render Repeated days checkboxes
//it takes onToggleDay callback to call when any of the checkboxes are checked 
const RepeatedDays = ({repeatedDays, onToggleDay}) => {
    return (
        <div className="row">
            <div className="col-auto px-2">Mo<input type="checkbox" checked={repeatedDays[0]} onChange={(e) => onToggleDay(0, e.target.checked)}/></div>
            <div className="col-auto px-2">Tu<input type="checkbox" checked={repeatedDays[1]} onChange={(e) => onToggleDay(1, e.target.checked)}/></div>
            <div className="col-auto px-2">We<input type="checkbox" checked={repeatedDays[2]} onChange={(e) => onToggleDay(2, e.target.checked)}/></div>
            <div className="col-auto px-2">Th<input type="checkbox" checked={repeatedDays[3]} onChange={(e) => onToggleDay(3, e.target.checked)}/></div>
            <div className="col-auto px-2">Fr<input type="checkbox" checked={repeatedDays[4]} onChange={(e) => onToggleDay(4, e.target.checked)}/></div>
            <div className="col-auto px-2">Sa<input type="checkbox" checked={repeatedDays[5]} onChange={(e) => onToggleDay(5, e.target.checked)}/></div>
            <div className="col-auto px-2">Su<input type="checkbox" checked={repeatedDays[6]} onChange={(e) => onToggleDay(6, e.target.checked)}/></div>
        </div>
        
    );
}

const Chores = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [choreName, setChoreName] = useState("");
    const [assignedId, setAssignedId] = useState("");
    const [repeated, setRepeated] = useState(false);
    const [members, setMembers] = useState([]);
    const [repeatedDays, setRepeatedDays] = useState([false,false,false,false,false,false,false]);

    const addChore = () => {
      API.createChore(choreName, repeated, repeatedDays, assignedId)
      .then(() => {
        console.log("Chore is created!");
        setChoreName("");
        setRepeated(false);
        setRepeatedDays([false,false,false,false,false,false,false]);
      });
    };
    // change the repeated days state 
    // function takes day param that represents days from M-Su and state of the checkbox
    const toggleDay = (day, checked) => {
      repeatedDays[day] = checked;
      setRepeatedDays(repeatedDays);
    };

    useEffect(() => {
        API.getMembers().then((res) => setMembers(res.data));
    }, [])

    return (
        <div>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Chore</th>
      <th>Repeats</th>
      <th>Due on</th>
      <th>Assigned to</th>
      <th>Save</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td><input className="form-control" placeholder="Add a chore" value={choreName} onChange={(e) =>setChoreName(e.target.value)}/></td>
      <td style={{width: "100px"}}><input type="checkbox" checked={repeated} onChange={(e) => setRepeated(e.target.checked)} /></td>
      <td style={{width: "360px"}}>{
        repeated
        ? <RepeatedDays repeatedDays={repeatedDays} onToggleDay={toggleDay}/>
        : <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      }</td>
      <td>
        <select className="form-control" onChange = {(e) => setAssignedId(e.target.value)}>
        <option value="">Select an assignee...</option>
          {members.map((member, i) => <option value={member.id} key={i}>{member.name}</option>)}
        </select>
      </td>
      <td><button className="btn btn-primary" onClick={addChore}>Add</button></td>
    </tr>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td></td>
    </tr>
  </tbody>
</Table>


        </div>
    );
};

export default Chores;