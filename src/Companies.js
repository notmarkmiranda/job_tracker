import React, { Component } from 'react'
import map from 'lodash/map'

class Companies extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { companies } = this.props
    return(
      <div>
        <div className='panel panel-primary'>
          <div className='panel-heading'>
            The Companies
          </div>
          { map(companies, (company, key) => (
            <div key={ key } className='panel-body'>{ company.name }</div>
          )) }
        </div>
      </div>
    )
  }
}

export default Companies;
