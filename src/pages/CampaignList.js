import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CampaignListComponent from '../Components/CampaignList';
import axios from 'axios';
import {
  withRouter
} from 'react-router-dom';

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
    const config = {
      headers: {'Access-Control-Allow-Origin': '*'}
    };
    axios.get('http://80cf2514.ngrok.io/campaigns?user_id=1', config).then((response) => {
      if (response.data !== '') {
        const campaigns = response.data;
        this.setState({ campaigns });
      }
    }).catch((err) => console.log(err));
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
            <Button variant="primary" onClick={() => this.props.history.push('/campaign/new')}>Nueva causa</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(CampaignList);