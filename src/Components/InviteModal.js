import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class InviteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show,
    };

    this.invite = this.activate.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ show: false });
  }

  invite() {
    this.close();
    this.props.invite();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      show: newProps.show,
    });
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Invitar a un nuevo contribuyente</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Nombre y apellido</Form.Label>
              <Form.Control type="text" placeholder="Ingresa el nombre" value={this.state.name} onChange={this.handleNameChange} isInvalid={this.state.name.trim().length === 0} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa el email" value={this.state.email} onChange={this.handleEmailChange} isInvalid={this.state.email.trim().length === 0} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={this.invite}>Invitar</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default InviteModal;