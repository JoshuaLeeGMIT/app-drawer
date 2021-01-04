import CardDeck from 'react-bootstrap/CardDeck';
import React from 'react';

import {App} from './app';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class AppGrid extends React.Component {

  state = {
    apps: [
      {
        "name": "gcc",
        "descr": "The GNU Compiler Collection",
        "icon": "https://gcc.gnu.org/img/gccegg-65.png",
        "url": "https://gcc.gnu.org/releases.html"
      },
      {
        "name": "Builder",
        "descr": "An IDE for GNOME",
        "icon": "https://gitlab.gnome.org/GNOME/gnome-builder/-/blob/master/data/icons/hicolor/scalable/apps/org.gnome.Builder.svg",
        "url": "https://wiki.gnome.org/Apps/Builder"
      }
    ]
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