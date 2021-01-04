import React from 'react';

import {DotfileItem} from './dotfileItem';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Dotfile extends React.Component {
  render() {
    return this.props.dotfiles.map((dotfile) => {
      return <DotfileItem dotfile={dotfile}></DotfileItem>
    })
  }
}