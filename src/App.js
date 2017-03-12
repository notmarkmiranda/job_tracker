import React, { Component } from 'react'

import { auth, database } from './firebase'
import Companies from './Companies'
import Header from './Header'
import NewCompany from './NewCompany'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      companies: null,
      warning: false,
      newCompany: '',
      user: null
    }
    this.companiesRef = database.ref('companies')
  }

  componentWillMount() {
    this.companiesRef.orderByChild('name').on('value', this._listenForCompanyChanges)
    auth.onAuthStateChanged((user) => {
      this.setState({ user })
    })
  }

  handleChange = (event) => {
    this.setState({ newCompany: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newCompany = this.state.newCompany
    let duplicate = false

    this.state.companies &&
    Object.keys(this.state.companies).forEach((key) => {
      if (this.state.companies[key].name.toLowerCase() === newCompany.toLowerCase()) { return duplicate = true }
    })

    this._rejectOrSet(duplicate, newCompany)
  }

  _listenForCompanyChanges = (snapshot) => {
    this.setState({ companies: snapshot.val() })
  }

  _rejectOrSet = (duplicate, newCompany) => {
    if (!duplicate) {
      this.companiesRef.push({ name: newCompany })
      this.setState({
        warning: false,
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
      <div className="Application">
        <Header user={ user } />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Companies companies={ companies } />
            </div>
            <div className="col-md-4">
              {
                user
                ? <NewCompany
                    handleSubmit={ this.handleSubmit }
                    handleChange={ this.handleChange }
                    newCompany={ this.state.newCompany }
                    warning={ this.state.warning }
                  />
                : <p>You gotta sign in to do stuff</p>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App
