import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Home} from './components/home';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar bg="light">
            <Navbar.Brand>AppDrawer</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
