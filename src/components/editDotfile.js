import React from 'react';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class EditDotfile extends React.Component {

  constructor() {
    /* Call React.Component constructor. */
    super();

    /* Bind handlers. */
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeText = this.onChangeText.bind(this);

    /* Initialise state. */
    this.state = {
      name: "",
      text: ""
    };
  }

  /* Lifecycle hook. */
  componentDidMount() {
    axios.get('http://localhost:4000/apis/dotfiles/' + this.props.match.params.id).then(response => {
      this.setState({
        _id: response.data._id,
        name: response.data.name,
        text: response.data.text
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
  onChangeText(e) {
    this.setState({
      text: e.target.value
    });
  }

  onSubmit(event) {
    /* Create object from state to send to server. */
    let data = {
      _id: this.state._id,
      name: this.state.name,
      text: this.state.text
    };

    event.preventDefault();

    /* Make PUT request to server. */
    axios.put('http://localhost:4000/api/dotfiles' + this.state._id, data).then((res) => {
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
    )
  }
}