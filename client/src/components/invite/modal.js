import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class App extends Component {
  state = {
    isOpen: false
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    return (
      <>
        <div
          className="modalContainer"
          style={{ height: "100vh" }}
        >
          <Button variant="primary" onClick={this.openModal}>
            Launch demo modal
          </Button>
        </div>
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default App;