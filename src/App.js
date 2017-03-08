import React, { Component } from 'react';
import { auth, database } from './firebase';
import NewCompany from './NewCompany';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Application">
        <header className="Application--header">
          <h2>Job Tracker</h2>
        </header>
        <NewCompany />
      </div>
    );
  }
}

export default App;
