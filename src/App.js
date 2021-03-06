import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

import {AppGrid} from './components/appGrid';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {CreateApp} from './components/createApp';
import {EditApp} from './components/editApp';
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
              <Nav.Link href="/browse">My Apps</Nav.Link>
              <Nav.Link href="/create">Add App</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/browse" component={AppGrid}></Route>
            <Route exact path="/create" component={CreateApp}></Route>
            <Route exact path="/edit:id" component={EditApp}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
