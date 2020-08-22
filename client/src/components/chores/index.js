import React, {useState, useEffect} from 'react';
import {Table } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from "../../utils/API";

const RepeatedDays = () => {
    return (
        <div className="row">
            <div className="col-auto px-2">Mo<input type="checkbox"/></div>
            <div className="col-auto px-2">Tu<input type="checkbox"/></div>
            <div className="col-auto px-2">We<input type="checkbox"/></div>
            <div className="col-auto px-2">Th<input type="checkbox"/></div>
            <div className="col-auto px-2">Fr<input type="checkbox"/></div>
            <div className="col-auto px-2">Sa<input type="checkbox"/></div>
            <div className="col-auto px-2">Su<input type="checkbox"/></div>
        </div>
        
    );
}

const Chores = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [repeated, setRepeated] = useState(false);
    const [members, setMembers] = useState([]);
    const [repeatedDays, setRepeatedDays] = useState([false,false,false,false,false,false,false]);

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
      <td><input className="form-control" placeholder="Add a chore"/></td>
      <td style={{width: "100px"}}><input type="checkbox" onChange={(e) => setRepeated(e.target.checked)} /></td>
      <td style={{width: "360px"}}>{ repeated ? <RepeatedDays/> : <DatePicker selected={startDate} onChange={date => setStartDate(date)} />}</td>
      <td><select className="form-control" >{members.map((member, i) => <option key={i}>{member}</option>)}</select></td>
      <td><button className="btn btn-primary">Add</button></td>
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