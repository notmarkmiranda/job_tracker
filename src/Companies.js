import React, { Component } from 'react'
import map from 'lodash/map'

class Companies extends Component {
  render(props) {
    const { companies, user } = this.props
    return(
      <div>
        <div className='list-group'>
          <div className='list-group-item'>
            <h4>The Companies</h4>
          </div>
          { map(companies, (company, key) => (
            <div key={ key } className='list-group-item'>
              <h4 className="list-group-item-heading">{ company.name }</h4>
              {
                user &&
                <div className="btn-group btn-group-xs" role="group" aria-label="...">
                  <button type="button" className="btn btn-default">New Job</button>
                  <button type="button" className="btn btn-default">Edit Company</button>
                  <button type="button" className="btn btn-danger" data-index={ key } onClick={ this.props.handleDelete }>Delete Company</button>
                </div>
              }
            </div>
          )) }
        </div>
      </div>
    )
  }
}

export default Companies;
