import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CampaignListComponent from '../Components/CampaignList';

const campaigns = [
  {
    id: 1,
    detail: 'lorem ipsum',
    amount: 21123,
  },
  {
    id: 3,
    detail: 'esta es una campaña muy buena',
    amount: 500,
  },
  {
    id: 6,
    detail: 'vamos a ganar',
    amount: 890,
  },
  {
    id: 13,
    detail: 'wololoooo',
    amount: 1100,
  }
]

class CampaignList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campaigns: [],
    };
  }

  componentDidMount() {
    this.setState({ campaigns });
  }

  render() {
    return (
      <Container>
        <Row>
          <h1>Lista de causas</h1>
        </Row>
        <Row>
          <CampaignListComponent campaigns={this.state.campaigns}/>
        </Row>
        <Row>
          <Col md="10"></Col>
          <Col md="2">
            <Button variant="primary" onClick={this.showActivateModal}>Nueva causa</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CampaignList;