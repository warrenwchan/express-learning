import React, { Component } from 'react';
import img from './tamarcus-brown-158860.jpg'
import './App.css';

class App extends Component {

  state = {
    players: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/players')
    .then(response => response.json())
    .then(players => this.setState({players}))
    .catch(err => console.log)
  }

  render() {
    console.log(this.state.players)
    return (
      <div className="App">
        <div className="header-img">
          <img src={img} alt="basketball-img"/>
        </div>
        <div className="playerContain">
          {this.state.players.map(player => (
            <div className="player" key={player.id}>
              <p>{player.firstname}</p>
              <p>{player.lastname}</p>
              <p>{player.number}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
