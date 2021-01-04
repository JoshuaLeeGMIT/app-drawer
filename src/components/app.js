import React from 'react';

import {AppCard} from './appCard';

import '../App.css';

export class App extends React.Component {

  render() {
    return this.props.apps.map((app) => {
        return <AppCard app={app}></AppCard>
      })
  }
}