import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentID: '101356043',
      name: 'Luis Rodrigo Procopio Andrada',
      college: 'George Brown College, Toronto',
    };
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="title">Welcome to Fullstack Development - I</h1>
            <p className="subtitle">React JS Programming Week09 Lab exercise</p>
            <p className="student-info">{this.state.studentID}</p>
            <p className="student-info">{this.state.name}</p>
            <p className="college">{this.state.college}</p>
          </header>
        </div>
    );
  }
}

export default App;
