import React, { Component } from 'react';
import { auth, database } from './firebase';
import NewCompany from './NewCompany';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      companies: [{ [Date.now().toString()]: 'The Flyfisher Group' }],
      newCompany: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    let newCompanyForm = this.refs.newCompany
    let newState = this.state.companies
    newState.push({ [Date.now().toString()]: this.state.newCompany })
    this.setState({
      companies: newState,
      newCompany: ''
    })
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
