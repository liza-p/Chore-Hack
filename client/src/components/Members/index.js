import React from 'react';
import "./style.css";
import { Container, Table } from "react-bootstrap";
import { useChoreContext } from "../../utils/GlobalState"

const Members = () => {
    const state = useChoreContext()[0]
    return (

    <div className="d-flex justify-content-center">
        <Container>
            {/* <div className="row"> */}
            {/* <div className="col-8"> */}
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Color</th>
                        <th>Name</th>
                        <th>Notification</th>
                        {/* <th>Assigned to:</th> */}
                    </tr>
                </thead>
                <tbody>
                    {state.members.map(member => {
                        return (
                            <tr key={member.id}>
                                <td>Red</td>
                                <td>{member.name}</td>
                                <td>OFF</td>
                                {/* <td>@mdo</td> */}
                            </tr>
                        )
                    }

                    )}
                </tbody>
            </Table>
        </Container>
        </div>
        //     </div>
        // </div>
    );
};

export default Members;
