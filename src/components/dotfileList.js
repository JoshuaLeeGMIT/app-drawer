import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';
import Row from 'react-bootstrap/Row';

import {Dotfile} from './dotfile';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class DotfileList extends React.Component {

  /* Object's state. */
  state = {
    dotfiles: []
  }

  constructor() {
    super();
    this.reloadPage = this.reloadPage.bind(this);
  }

  reloadPage() {
    axios.get("http://localhost:4000/api/dotfiles").then((response) => {
      this.setState({dotfiles: response.data.dotfiles})
    }).catch((e) => {
      console.log(e);
    });
  }

  /* Implement lifecycle hook. */
  componentDidMount() {
    /* Make a GET request to fill object's state. */
    axios.get("http://localhost:4000/api/dotfiles").then((response) => {
      this.setState({dotfiles: response.data})
    }).catch((e) => {
      console.log(e);
    });
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