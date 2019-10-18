import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

class ActivationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show,
    };

    this.activate = this.activate.bind(this);
  }

  close() {
    this.setState({ show: false });
  }

  activate() {
    this.close();
    this.props.activate();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      show: newProps.show,
    });
  }

  render() {
    const campaign = this.props.campaign;
    return (
      <Modal show={this.state.show} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Activar campaña</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ListGroup variant="flush">
          <ListGroup.Item>ID de causa: {campaign.id}</ListGroup.Item>
          <ListGroup.Item>Monto actual: {campaign.amount}</ListGroup.Item>
          <ListGroup.Item>Detalle: {campaign.detail}</ListGroup.Item>
          <ListGroup.Item>
            <h2>Beneficiarios</h2>
            <ListGroup variant="flush">
              {
                campaign.beneficiaries && campaign.beneficiaries.map((beneficiary) => <ListGroup.Item key={Math.random()}>{beneficiary.name} {beneficiary.surname}</ListGroup.Item>)
              }
            </ListGroup>
          </ListGroup.Item>
          </ListGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={this.activate}>Activar</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ActivationModal;