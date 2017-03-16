import React, { Component } from 'react'
import map from 'lodash/map'

import Company from './Company'

class Companies extends Component {
  render(props) {
    const { companies, user } = this.props
    return(
      <div>
        <div className='list-group'>
          <div className='list-group-item active'>
            <h4>The Companies</h4>
          </div>
          { map(companies, (company, key) => (
            <Company
              key={ key }
              companyKey={ key }
              company={ company }
              user={ user }
              handleDelete={ this.props.handleDelete }
            />
          )) }
        </div>
      </div>
    )
  }
}

export default Companies;
