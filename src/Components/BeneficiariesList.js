import React from 'react';
import Table from 'react-bootstrap/Table';

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
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>DNI</th>
          </tr>
        </thead>
        <tbody>
          {this.props.beneficiaries && this.props.beneficiaries.map((beneficiary) => (
            <tr key={Math.random()}>
              <td>
                {beneficiary.id}
              </td>
              <td>
                {beneficiary.name}
              </td>
              <td>
                {beneficiary.surname}
              </td>
              <td>
                {beneficiary.dni}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }
}

export default BeneficiariesList;