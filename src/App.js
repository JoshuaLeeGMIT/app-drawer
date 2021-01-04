import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

import {AppGrid} from './components/appGrid';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {CreateApp} from './components/createApp';
import {CreateDotfile} from './components/createDotfile';
import {DotfileList} from './components/dotfileList';
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
              <Nav.Link href="/browse-apps">My Apps</Nav.Link>
              <Nav.Link href="/browse-dotfiles">My Dotfiles</Nav.Link>
              <Nav.Link href="/create-app">Add App</Nav.Link>
              <Nav.Link href="/create-dotfile">Add Dotfile</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/browse-apps" component={AppGrid}></Route>
            <Route exact path="/browse-dotfiles" component={DotfileList}></Route>
            <Route exact path="/create-app" component={CreateApp}></Route>
            <Route exact path="/create-dotfile" component={CreateDotfile}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
