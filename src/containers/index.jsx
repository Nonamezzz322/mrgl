import React from 'react';
import ReactDOM from 'react-dom';
import GameField from './gamefield'

class Game extends React.Component{

  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    return(
      <GameField/>
    );
  }
}

ReactDOM.render(<Game />,document.getElementById('root'))