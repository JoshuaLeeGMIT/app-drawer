import Button from 'react-bootstrap/Button';
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

  onSubmit(event) {
    /* Create object from state to send to server. */
    let data = {
      name: this.state.name,
      text: this.state.text
    };

    event.preventDefault();

    /* Make POST request to server. */
    axios.post('http://localhost:4000/api/dotfiles', data).then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
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
              <Form.Control as="textarea" rows={8} value={this.state.descr} onChange={this.onChangeText}></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">Add dotfile</Button>
          </form>
        </Container>
      </div>
    );
  }
}