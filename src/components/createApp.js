import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import React from 'react';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class CreateApp extends React.Component {

  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescr = this.onChangeDescr.bind(this);
    this.onChangeIcon = this.onChangeIcon.bind(this);
    this.onChangeURL = this.onChangeURL.bind(this);

    this.state = {
      name: "",
      descr: "",
      icon: "",
      url: ""
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDescr(e) {
    this.setState({
      descr: e.target.value
    });
  }

  onChangeIcon(e) {
    this.setState({
      icon: e.target.value
    });
  }
  
  onChangeURL(e) {
    this.setState({
      url: e.target.value
    });
  }

  onSubmit(event) {
    /* Create object from state to send to server. */
    let data = {
      name: this.state.name,
      descr: this.state.descr,
      icon: this.state.icon,
      url: this.state.url
    };

    event.preventDefault();

    /* Make POST request to server. */
    axios.post('http://localhost:4000/api/apps', data).then((res) => {
      this.props.reloadPage();
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
              <Form.Label>App name</Form.Label>
              <Form.Control type="text" value={this.state.name} onChange={this.onChangeName}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>App description</Form.Label>
              <Form.Control as="textarea" rows={3} value={this.state.descr} onChange={this.onChangeDescr}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Icon URL</Form.Label>
              <Form.Control type="text" value={this.state.icon} onChange={this.onChangeIcon}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Download link</Form.Label>
              <Form.Control type="text" value={this.state.url} onChange={this.onChangeURL}></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">Add app</Button>
          </form>
        </Container>
      </div>
    );
  }
}