import React from 'react';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BeneficiariesList from '../Components/BeneficiariesList';
import NewBeneficiaryModal from '../Components/NewBeneficiaryModal';
import ActivationModal from '../Components/ActivationModal';
import Axios from 'axios';

const beneficiaries = [
  {
    id: '1',
    name: 'Roberto Carlos',
    surname: 'Carlos',
    dni: '33433431',
  },
  {
    id: 2,
    name: 'Miguel',
    surname: 'Paez',
    dni: 23232322,
    picture: ''
  }
];

const campaign = {
  id: 1,
  detail: '',
  amount: 21123,
  beneficiaries
}

class CampaignEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showActivationModal: false,
      campaign: {},
    };
    this.openAddBeneficiary = this.openAddBeneficiary.bind(this);
    this.addBeneficiary = this.addBeneficiary.bind(this);
    this.activate = this.activate.bind(this);
    this.showActivateModal = this.showActivateModal.bind(this);
  }

  componentDidMount() {
    // TODO: API call to get campaign data
    this.setState({ campaign: campaign });
  }

  openAddBeneficiary() {
    this.setState({ showModal: true });
  }
  
  addBeneficiary(beneficiary) {
    const campaignCopy = Object.assign({}, campaign);
    campaignCopy.beneficiaries.push(beneficiary);
    this.setState({ campaign: campaignCopy });
  }

  showActivateModal() {
    this.setState({ showActivationModal: true });
    //TODO: do api call to activate campaign
  }
  
  activate() {
    //TODO: do API call
  }

  save() {
    const beneficiaries = this.state.campaign.beneficiaries.map(beneficiary => ({
      document_id: beneficiary.dni,
      name: beneficiary.name,
      transaction_pin: beneficiary.pin
    }));
    Axios.post(`localhost:8080/campaigns/${this.state.campaign.id}/assignation`, beneficiaries).then(response => {
      console.log('saved');
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <Container className="campaign-edit">
        <Row>
          <Col md="10"></Col>
          <Col md="2">
            <Button onClick={this.openAddBeneficiary}>Agregar</Button>
          </Col>
        </Row>
        <Row>
          <BeneficiariesList beneficiaries={this.state.campaign.beneficiaries}/>
        </Row>
        <Row>
          <Col md="9"></Col>
          <Col md="3">
            <ButtonGroup>
              <Button variant="primary" onClick={this.save}>Guardar</Button>
              <Button variant="danger">Cancelar</Button>
            </ButtonGroup>
          </Col>
        </Row> 
        <NewBeneficiaryModal show={this.state.showModal} addBeneficiary={this.addBeneficiary}/>
        <ActivationModal show={this.state.showActivationModal} campaign={this.state.campaign} activate={this.activate} />
      </Container>
    );
  }
}

export default CampaignEdit;