import React, { Component } from 'react';

class NewCompany extends Component {
  render(props) {
    const companyName = this.props.value
    return(
      <div className="col-md-4">
        <form>
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              placeholder="Name of a Company"
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
              >
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

 export default NewCompany;
