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
      newCompany: ''
    }

  }

  checkOrSet = (index, newCompany) => {
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
    this.checkOrSet(index, newCompany)
    this.setState({ newCompany: '' })
    let newCompanyForm = this.refs.newCompany
    newCompanyForm.value = ""
  }

  handleChange = (event) => {
    this.setState({
      newCompany: event.target.value
    })
  }

  render() {
    const companyName = this.state.newCompany
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
            <form>
              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  placeholder="test"
                  className="form-control"
                  ref="newCompany"
                  onChange={ this.handleChange }
                />
              </div>
              <div className="form-group">
                <button
                  onClick={ this.handleSubmit }
                  disabled={ !companyName }
                  className="btn btn-primary"
                  >Submit
                </button>
              </div>
            </form>
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
