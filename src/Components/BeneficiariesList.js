import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

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

class BeneficiariesList extends React.Component {
  render() {
    return (
      <ListGroup>
        {campaign.beneficiaries.map((beneficiary) => <ListGroup.Item>{beneficiary.name}</ListGroup.Item>)}
      </ListGroup>
    )
  }
}

export default BeneficiariesList;