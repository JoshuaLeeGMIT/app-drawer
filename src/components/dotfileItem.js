import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class DotfileItem extends React.Component {
  render() {
    return (
      <div className="App">
        <ListGroup.Item>{this.props.dotfile.name}</ListGroup.Item>
      </div>
    );
  }
}