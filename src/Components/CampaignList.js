import React from 'react';
import Table from 'react-bootstrap/Table';

class CampaignList extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripcion</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {this.props.campaigns.map((campaign) => (
            <tr>
              <td>{campaign.id}</td>
              <td>{campaign.detail}</td>
              <td>{campaign.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default CampaignList;