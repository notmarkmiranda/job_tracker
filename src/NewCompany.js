import React, { Component } from 'react';

class NewCompany extends Component {
  constructor() {
    super()
  }

  render(props) {
    const companyName = this.props.value
    return(
      <form>
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            placeholder="test"
            className="form-control"
            value={ this.props.value }
            onChange={ this.props.handleChange }
          />
        </div>
        <div className="form-group">
          <button
            onClick={ this.props.handleSubmit }
            disabled={ !companyName }
            className="btn btn-primary"
            >Submit
          </button>
        </div>
      </form>
    )
  }
}

 export default NewCompany;
