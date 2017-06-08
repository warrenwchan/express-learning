import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    players: {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/players')
    .then(response => response.json())
    .then(players => this.setState({players}))
    .catch(err => console.log)
  }

  mapPlayers() {
    let players = this.state.players

    for( let i = 0; i < players.length; i++ ) {
      return <p>{players[i].firstname}</p>
    }
  }

  render() {
    console.log(this.state.players)
    console.log(this.mapPlayers())
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {this.mapPlayers()}
        </div>
      </div>
    );
  }
}

export default App;
