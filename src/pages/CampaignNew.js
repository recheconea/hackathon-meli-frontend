import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InvitationModal from '../Components/InviteModal';
import ContributorsList from '../Components/ContributorsList';

class CampaignNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contributors: [],
      id: '',
      description: '',
      amount: '',
    }

    this.openInvitationModal = this.openInvitationModal.bind(this);
    this.invite = this.invite.bind(this);
  }

  openInvitationModal() {
    this.setState({ showInvitationModal: true })
  }

  invite(contributor) {
    const contributors = [...this.state.contributors];
    contributors.push(contributor);
    this.setState({ contributors: contributors, showInvitationModal: false });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="2"></Col>
          <Col md="8"><h2>Nueva campaña</h2></Col>
          <Col md="2"></Col>
        </Row>
        <Row>
          <Col md="2"></Col>
          <Col md="8">
            <Form>
              <Form.Group>
                <Form.Label>Id de causa</Form.Label>
                <Form.Control type="text" placeholder="Ingresa el ID" />
                <Form.Text className="text-muted">
                  Es el nombre de tu causa
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" placeholder="Ingresa la descripción" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Monto</Form.Label>
                <Form.Control type="number" placeholder="Ingresa el monto a recaudar en la campaña" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Contribuyentes <Button variant="link" onClick={this.openInvitationModal}>Agregar</Button></Form.Label>
                <ContributorsList contributors={this.state.contributors} />
              </Form.Group>
            </Form>
          </Col>
          <Col md="2"></Col>
        </Row>
        <Row>
          <Col md="8"></Col>
          <Col md="4">
            <Button>Guardar</Button>
            <Button>Cancelar</Button>
          </Col>
        </Row>
        <InvitationModal show={this.state.showInvitationModal} invite={this.invite}/>
      </Container>
    )
  }
}

export default CampaignNew;