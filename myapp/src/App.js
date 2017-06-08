import React, { Component } from 'react';
import logo from './logo.svg';
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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="playerContain">
          {this.state.players.map(player => (
            <div className="player">
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
