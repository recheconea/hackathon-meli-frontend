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
      campaign: {
        beneficiaries: []
      },
    };
    this.openAddBeneficiary = this.openAddBeneficiary.bind(this);
    this.addBeneficiary = this.addBeneficiary.bind(this);
    this.activate = this.activate.bind(this);
    this.showActivateModal = this.showActivateModal.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const campaignId = urlParams.get('campaign_id');
    Axios.get(`http://80cf2514.ngrok.io/campaigns/?campaign_id=${campaignId}`).then(response => {
      this.setState({ campaign: response.data[0] });
    })
  }

  openAddBeneficiary() {
    this.setState({ showModal: true });
  }
  
  addBeneficiary(beneficiary) {
    const campaignCopy = Object.assign({}, this.state.campaign);
    if (campaignCopy.beneficiaries) {
      campaignCopy.beneficiaries.push(beneficiary)
    } else {
      campaignCopy.beneficiaries = new Array(beneficiary);
    }
    this.setState({ campaign: campaignCopy, showModal: false });
  }

  showActivateModal() {
    this.setState({ showActivationModal: true });
  }
  
  activate() {
    //TODO: do API call
  }

  save() {
    const beneficiaries = this.state.campaign.beneficiaries.map(beneficiary => ({
      document_id: beneficiary.dni,
      name: beneficiary.name,
      transaction_pin: beneficiary.pin,
      picture: beneficiary.photo.replace('data:image/png;base64,', '')
    }));
    
    Axios.post(`http://80cf2514.ngrok.io/campaigns/${this.state.campaign.id}/assignation`, beneficiaries).then(response => {
      console.log('saved');
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <Container className="campaign-edit">
        <Row>
          <h1>Agrega beneficiarios</h1>
        </Row>
        <Row>
          <Col md="10"></Col>
          <Col md="2">
            <Button onClick={this.openAddBeneficiary} className="add-button">Agregar</Button>
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