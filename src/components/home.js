import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import React from 'react';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Home extends React.Component {
  render() {
    return (
      <div class="App">
        <Jumbotron>
          <h1>
            AppDrawer
          </h1>
          <h5>
            Manage your apps the smart way.
          </h5>
          <p>
            <Button variant="outline-primary">
              Learn more
            </Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}
