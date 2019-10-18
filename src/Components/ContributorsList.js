import React from 'react';
import Table from 'react-bootstrap/Table';

class ContributorsList extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {this.props.contributors.map((contributor) => (
            <tr>
              <td>{contributor.name}</td>
              <td>{contributor.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default ContributorsList;