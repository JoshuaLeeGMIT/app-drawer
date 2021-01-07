import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import React from 'react';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class EditApp extends React.Component {

  constructor() {
    /* Call React.Component constructor. */
    super();

    /* Bind handlers. */
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescr = this.onChangeDescr.bind(this);
    this.onChangeIcon = this.onChangeIcon.bind(this);
    this.onChangeURL = this.onChangeURL.bind(this);

    /* Initialise state. */
    this.state = {
      name: "",
      descr: "",
      icon: "",
      url: ""
    };
  }

  /* Lifecycle hook. */
  componentDidMount() {
    axios.get('http://localhost:4000/apis/apps/' + this.props.match.params.id).then(response => {
      this.setState({
        _id: response.data._id,
        name: response.data.name,
        descr: response.data.descr,
        icon: response.data.icon,
        url: response.data.url
      })
    }).catch((e) => {
      console.log(e);
    })
  }

  /* Handle form changes, setting the appropriate state field. */
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  /* Ditto. */
  onChangeDescr(e) {
    this.setState({
      descr: e.target.value
    });
  }

      /* Ditto. */
  onChangeIcon(e) {
    this.setState({
      icon: e.target.value
    });
  }

  /* Ditto. */
  onChangeURL(e) {
    this.setState({
      url: e.target.value
    });
  }

  onSubmit(event) {
    /* Create object from state to send to server. */
    let data = {
      _id: this.state._id,
      name: this.state.name,
      descr: this.state.descr,
      icon: this.state.icon,
      url: this.state.url
    };

    event.preventDefault();

    /* Make PUT request to server. */
    axios.put('http://localhost:4000/api/apps' + this.state._id, data).then((res) => {
      console.log(res);
    }).catch((e) => {
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
            <Button variant="primary" type="submit">Update app</Button>
          </form>
        </Container>
      </div>
    )
  }
}