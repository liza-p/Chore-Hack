import React, { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import { useChoreContext } from "../../utils/GlobalState";
import { UPDATE_CHORES, UPDATE_MEMBERS } from "../../utils/actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from "../../utils/API";
import "./style.css";


//function to render Repeated days checkboxes
//it takes onToggleDay callback to call when any of the checkboxes are checked 
const RepeatedDays = ({ repeatedDays, onToggleDay }) => {
  return (
    <div className="row">
      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, i) => <div className="col-auto px-2">{day}<input type="checkbox" checked={repeatedDays[i]} onChange={(e) => onToggleDay(i, e.target.checked)} /></div>)}
    </div>
  );
}
//function to format due_date data from the mySQL timestamp to normal date
const formatDate = (timestamp) =>{
  if(!timestamp){
    return "";
  }
  return (new Date(timestamp)).toDateString();
}

const Chores = () => {
  const [state, dispatch] = useChoreContext();

  const [dueDate, setDueDate] = useState(new Date());
  const [choreName, setChoreName] = useState("");
  const [assignedId, setAssignedId] = useState("");
  const [repeated, setRepeated] = useState(false);
  const [repeatedDays, setRepeatedDays] = useState([false, false, false, false, false, false, false]);

  const addChore = () => {
    API.createChore(choreName, repeated, repeatedDays, dueDate, assignedId)
      .then(() => {
        loadChores()
        console.log("Chore is created!");
        setChoreName("");
        setRepeated(false);
        setRepeatedDays([false, false, false, false, false, false, false]);
      });
  };

  const removeChore = (choreId) => {
    API.removeChore(choreId).then(() => loadChores());
  }
  // change the repeated days state 
  // function takes day param that represents days from M-Su and state of the checkbox
  const toggleDay = (day, checked) => {
    const newRepeatedDays = repeatedDays.slice();
    newRepeatedDays[day] = checked;
    setRepeatedDays(newRepeatedDays);
  };

  const loadChores = () => {
    API.getAllHouseholdChores()
      .then(res => {
        dispatch({ type: UPDATE_CHORES, chores: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: UPDATE_CHORES, chores: [] });
      });
  };

  useEffect(() => {
    API.getMembers()
      .then((res) => {
        dispatch({ type: UPDATE_MEMBERS, members: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: UPDATE_MEMBERS, members: [] });
      });
  }, [dispatch]);

  console.log(state.chores)

  return (
    <Container style={{ marginTop: 20 }}>
        <h1>Manage Chores</h1>
      <Table bordered hover>
        <thead>
          <tr className="tr-heared">
            <th>Chore</th>
            <th>Repeats</th>
            <th>Due on</th>
            <th>Assigned to</th>
            <th>Save</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td><input className="form-control" placeholder="Add a chore" value={choreName} onChange={(e) => setChoreName(e.target.value)} /></td>
            <td style={{ width: "100px" }}><input type="checkbox" checked={repeated} onChange={(e) => setRepeated(e.target.checked)} /></td>
            <td style={{ width: "360px" }}>{
              repeated
                ? <RepeatedDays repeatedDays={repeatedDays} onToggleDay={toggleDay} />
                : <DatePicker selected={dueDate} onChange={date => setDueDate(date)} />
            }</td>
            <td>
              <select className="form-control" onChange={(e) => setAssignedId(e.target.value)}>
                <option value="">Select an assignee...</option>
                {state.members.map((member, i) => <option value={member.id} key={i}>{member.name}</option>)}
              </select>
            </td>
            <td><button className="btn btn-primary" onClick={addChore}>Add</button></td>
          </tr>
          {state.chores.map((chore, i) => {
            const user = state.members.find((user) => user.id === chore.UserId);
            return (
              <tr key={i}>
                <td>{chore.chore}</td>
                <td>{chore.repeats ? "Yes" : "No"}</td>
                <td>{
                  chore.repeats
                    ? ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"].filter((day, i) => chore.repeated_days[i]).join(', ')
                    : formatDate(chore.Repetitions[0]?.due_date)
                }</td>
                <td>{user?.name}</td>
                <td><button className="btn btn-danger" onClick={() => removeChore(chore.id)}>X</button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
  </Container>
  );
};

export default Chores;