import React from 'react';
import Axios from 'axios';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const campaign = {
  id: 4,
  description: 'this is my description',
  amount: 500,
  goalAmount: 4000,
};

class ContributorNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campaign: {},
      amount: ''
    };
    this.save = this.save.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ campaign });
  }

  save() {
    if (this.state.amount) {
      Axios.post('localhost:8080/campaigns/1/contribution', { user_id: Math.random(), amount: this.state.amount});
    }
  }

  handleChange(event) {
    this.setState({amount: event.target.value});
  }

  render() {
    const campaign = this.state.campaign;
    return (
      <Container>
        <Row>
          <h1>Contribuí a la campaña</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Label>ID</Form.Label><span>{campaign.id}</span>
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label><span>{campaign.description}</span>
            </Form.Group>
            <Form.Group>
              <Form.Label>Recaudado</Form.Label><span>{campaign.amount}</span>
            </Form.Group>
            <Form.Group>
              <Form.Label>Objetivo</Form.Label><span>{campaign.goalAmount}</span>
            </Form.Group>
            <Form.Group>
              <Form.Label>Tu contribución</Form.Label>
              <Form.Control type="number" value="this.state.amount" onChange={this.handleChange}></Form.Control>
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Button onClick={this.save}>Guardar</Button>
        </Row>
      </Container>
    );
  }
}

export default ContributorNew;