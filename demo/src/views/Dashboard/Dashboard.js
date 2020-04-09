import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>Sample card</CardHeader>
          <CardBody>
            Dashboard
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default Dashboard;

