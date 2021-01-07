import axios from 'axios';
import CardDeck from 'react-bootstrap/CardDeck';
import React from 'react';

import {App} from './app';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class AppGrid extends React.Component {

  /* Object's state. */
  state = {
    apps: []
  }

  constructor() {
    super();
    this.reloadPage = this.reloadPage.bind(this);
  }

  reloadPage() {
    axios.get("http://localhost:4000/api/apps").then((response) => {
      this.setState({apps: response.data.apps})
    }).catch((e) => {
      console.log(e);
    });
  }

  /* Implement lifecycle hook. */
  componentDidMount() {
    /* Make a GET request to fill object's state. */
    axios.get("http://localhost:4000/api/apps").then((response) => {
      this.setState({apps: response.data})
    }).catch((e) => {
      console.log(e);
    });
  }

  render() {
    return (
      <div className="App">
        <CardDeck>
          <App apps={this.state.apps}></App>
        </CardDeck>
      </div>
    );
  }
}