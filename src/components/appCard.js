import React from 'react';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

export class AppCard extends React.Component {
  render() {
    return (
      <div className="App">
        <Card style={{width: '16em'}}>
          <Card.Img variant="top" src={this.props.app.icon}/>
          <Card.Body>
            <Card.Title>{this.props.app.name}</Card.Title>
            <Card.Text>{this.props.app.descr}</Card.Text>
            <Card.Link href={this.props.app.url}>Download</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}