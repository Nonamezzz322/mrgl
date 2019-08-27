import React from 'react';
import ReactDOM from 'react-dom';

class GameField extends React.Component{

  constructor() {
    super();

  }

  render() {
    return(
      <div className="field">1223</div>
    );
  }
}

ReactDOM.render(<GameField />,document.getElementById('root'))