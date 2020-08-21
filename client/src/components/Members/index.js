import React from 'react';
import "./style.css";
import { Table, Modal } from "react-bootstrap";
import App from "../Invite/modal";

const Members = () => {
    return (
        <div className="d-flex justify-content-center memberContainer">
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
                            <tr>
                                <td>Red</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                {/* <td>@mdo</td> */}
                            </tr>
                        </tbody>
                    </Table>
                    <App/>
                </div>
        //     </div>
        // </div>
    );
};

export default Members;
