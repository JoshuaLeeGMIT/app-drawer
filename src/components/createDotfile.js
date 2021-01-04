import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import React from 'react';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class CreateDotfile extends React.Component {

  constructor() {
    super();

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescr = this.onChangeText.bind(this);

    this.state = {
      name: "",
      text: ""
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeText(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <form onSubmit={this.onSubmit}>
            <Form.Group>
              <Form.Label>Dotfile name</Form.Label>
              <Form.Control type="text" value={this.state.name} onChange={this.onChangeName}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Dotfile text</Form.Label>
              <Form.Control as="textarea" rows={8} value={this.state.descr} onChange={this.onChangeDescr}></Form.Control>
            </Form.Group>
          </form>
        </Container>
      </div>
    );
  }
}