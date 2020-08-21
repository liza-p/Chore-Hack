import React from 'react';
import "./style.css";
import { Table } from "react-bootstrap";

const Members = () => {
    return (
        <div className="memberContainer">
            <div className="row">
                <div class="col-8">
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
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                {/* <td>@mdo</td> */}
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Members;
