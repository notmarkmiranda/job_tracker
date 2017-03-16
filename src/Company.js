import React, { Component } from 'react'

class Company extends Component {
  constructor() {
    super()
    this.state = {
      editing: false
    }
  }
  render(props) {
    const { editing } = this.state
    return(
      <div key={ this.props.companyKey } className='list-group-item'>
        <h4 className="list-group-item-heading" hidden={ editing }>{ this.props.company.name }</h4>
        {
          this.props.user &&
          <div className="btn-group btn-group-xs" role="group" aria-label="...">
            <button type="button" className="btn btn-default">New Job</button>
            <button type="button" className="btn btn-default">Edit Company</button>
            <button
              type="button"
              className="btn btn-danger"
              data-index={ this.props.companyKey }
              onClick={ this.props.handleDelete }>
              Delete Company
            </button>
          </div>
        }
      </div>
    )
  }
}

export default Company
