import React, { Component } from 'react'
import { findIndex } from 'lodash'

import { auth, database } from './firebase'
import NewCompany from './NewCompany'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      companies: [{ id: Date.now().toString(), name: 'The Flyfisher Group' }],
      warning: false,
      newCompany: '',
    }

  }

  rejectOrSet = (index, newCompany) => {
    if (index === -1) {
      let newState = this.state.companies
      newState.push({ id: Date.now().toString(), name: this.state.newCompany })
      this.setState({
        warning: false,
        companies: newState,
      })
    } else {
      this.setState({
        warning: true
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newCompany = this.state.newCompany
    let index = findIndex(this.state.companies, ['name', newCompany])
    this.rejectOrSet(index, newCompany)
    this.setState({ newCompany: '' })
  }

  handleChange = (event) => {
    this.setState({
      newCompany: event.target.value
    })
  }

  render() {
    return (
      <div className="Application container">
        <header className="Application--header">
          <h2>Job Tracker</h2>
        </header>
        {
          this.state.warning &&
          <div className="alert alert-danger" role="alert">DUPLICATE!</div>
        }
        <div className="row">
          <div className="col-md-4">
            <NewCompany
              value={ this.state.newCompany }
              handleChange={ this.handleChange }
              handleSubmit={ this.handleSubmit }
            />
          </div>
          <div className="col-md-6">
            test
          </div>
        </div>

      </div>
    );
  }
}

export default App;
