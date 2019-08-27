import React from 'react';
import Player from '../components/player/player';

const player = new Player();

export default class GameField extends React.Component{

  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    return(
      <div className="field">123</div>
    );
  }
}
