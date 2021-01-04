import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

import {Home} from './components/home';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Navbar bg="light">
            <Navbar.Brand>AppDrawer</Navbar.Brand>
          </Navbar>
          <Home></Home>
        </div>
    );
  }
}

export default App;
