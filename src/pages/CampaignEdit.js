import React from 'react';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import BeneficiariesList from '../Components/BeneficiariesList';

class CampaignEdit extends React.Component {
  render() {
    return (
      <Container>
        <Button>Agregar</Button>
        <BeneficiariesList />
        <ButtonGroup>
          <Button variant="primary">Activar</Button>
          <Button variant="danger">Cancelar</Button>
        </ButtonGroup>
      </Container>
    );
  }
}

export default CampaignEdit;