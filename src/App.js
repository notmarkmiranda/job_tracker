import React, { Component } from 'react'
import map from 'lodash/map'

// import { auth, database } from './firebase'
import Companies from './Companies'
import Header from './Header'
import NewCompany from './NewCompany'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      companies: {
        [Date.now().toString()]: {
          name: 'The Flyfisher Group'
        }
      },
      warning: false,
      newCompany: '',
      user: true
    }
  }

  handleChange = (event) => {
    this.setState({
      newCompany: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newCompany = this.state.newCompany
    let duplicate = false
    Object.keys(this.state.companies).forEach((key) => {
      if (this.state.companies[key].name.toLowerCase() === newCompany.toLowerCase()) { return duplicate = true }
    })
    this.rejectOrSet(duplicate, newCompany)
  }

  rejectOrSet = (duplicate, newCompany) => {
    if (!duplicate) {
      let newState = this.state.companies
      newState[Date.now().toString()] = { name: newCompany}
      this.setState({
        warning: false,
        companies: newState,
      })
    } else {
      this.setState({
        warning: true
      })
    }
    this.setState({ newCompany: '' })
  }

  render() {
    const { companies, user } = this.state

    return (
      <div className="Application container">
        <Header />
        <div className="row">
          <div className="col-md-4">
            {
              user
              ? <NewCompany
                  value={ this.state.newCompany }
                  handleChange={ this.handleChange }
                  handleSubmit={ this.handleSubmit }
                  warning={ this.state.warning }
                />
              : <div>NOPE</div>
            }
          </div>
          <div className="col-md-6">
            <Companies companies={ this.state.companies } />
          </div>
        </div>
      </div>
    );
  }
}

export default App
