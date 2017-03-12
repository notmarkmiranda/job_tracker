import React, { Component } from 'react'
import map from 'lodash/map'

class Companies extends Component {
  render() {
    const { companies } = this.props
    return(
      <div>
        <div className='panel panel-primary'>
          <div className='panel-heading'>
            The Companies
          </div>
          <ul className='list-group'>
          { map(companies, (company, key) => (
            <li key={ key } className='list-group-item'>{ company.name }</li>
          )) }
          </ul>
        </div>
      </div>
    )
  }
}

export default Companies;
