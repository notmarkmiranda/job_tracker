import React, { Component } from 'react';
import { auth, database } from './firebase';
import NewCompany from './NewCompany';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      companies: [{ 1234: 'a' }],
      newCompany: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    let newState = this.state.companies
    newState.push({ [Date.now().toString()]: this.state.newCompany })
    this.setState({
      companies: newState,
      newCompany: ''
    })
    
  }

  handleChange = (event) => {
    this.setState({
      newCompany: event.target.value
    })
  }

  render() {
    return (
      <div className="Application">
        <header className="Application--header">
          <h2>Job Tracker</h2>
        </header>
        <div className="col-md-4">
          <form onSubmit={ this.handleSubmit } >
            <label>Company Name</label>
            <input
              type="text"
              placeholder="test"
              className="form-control"
              onChange={ this.handleChange }
            />
          </form>
        </div>

      </div>
    );
  }
}

export default App;
