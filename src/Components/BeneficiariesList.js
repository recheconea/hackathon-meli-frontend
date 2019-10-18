import React from 'react';
import Table from 'react-bootstrap/Table';

class BeneficiariesList extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre y Apellido</th>
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
                {beneficiary.document_id}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }
}

export default BeneficiariesList;