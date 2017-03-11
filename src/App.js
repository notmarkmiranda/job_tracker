import React, { Component } from 'react'
import map from 'lodash/map'

// import { auth, database } from './firebase'
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
    const companies = this.state.companies
    return (
      <div className="Application container">
        <Header />
        <div className="row">
          <NewCompany
            value={ this.state.newCompany }
            handleChange={ this.handleChange }
            handleSubmit={ this.handleSubmit }
          />
          <div className="col-md-6">
            {
              map(companies, (company, key) => (
                <div key={ key }>{ company.name }</div>
              ))
            }

            {
              this.state.warning &&
              <div className="alert alert-danger" role="alert">DUPLICATE!</div>
            }
          </div>
        </div>

      </div>
    );
  }
}

export default App;
