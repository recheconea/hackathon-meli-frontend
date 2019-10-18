import React from 'react';
import Table from 'react-bootstrap/Table';
import {
  withRouter
} from 'react-router-dom'

class CampaignList extends React.Component {
  goToCampaign(id) {
    this.props.history.push(`/campaign/${id}`);
  }
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
            <tr onClick={() => this.goToCampaign(campaign.id)}>
              <td>{campaign.id}</td>
              <td>{campaign.detail}</td>
              <td>{campaign.goal_amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default withRouter(CampaignList);