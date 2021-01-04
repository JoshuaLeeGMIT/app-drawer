import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';
import Row from 'react-bootstrap/Row';

import {Dotfile} from './dotfile';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class DotfileList extends React.Component {

  state = {
    dotfiles: [
      {
        "name": ".bashrc",
        "text": ""
      },
      {
        "name": ".vimrc",
        "text": ""
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md="auto">
              <ListGroup>
                <Dotfile dotfiles={this.state.dotfiles}></Dotfile>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}