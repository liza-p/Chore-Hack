import React, { Component } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import './style.css'

class JoinBtn extends Component {
  state = {
    isOpen: false
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    return (
      <>
        <div
          className="modalContainer text-center"
        >
          <Button onClick={this.openModal} className="arrow-button" >
            <h1><i className="fas fa-arrow-right fa-3x"></i></h1>
          </Button>
        </div>
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Join a New Household</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Household Code"
                aria-label="New Code"
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.closeModal}>
              Join
            </Button>
            <Button variant="secondary" onClick={this.closeModal}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default JoinBtn;