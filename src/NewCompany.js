import React, { Component } from 'react';

class NewCompany extends Component {
  render(props) {
    const name = this.props.newCompany
    return(
      <div>
        <form>
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              placeholder="Name of a Company"
              className="form-control"
              value={ name }
              onChange={ this.props.handleChange } />
          </div>
          <div className="form-group">
            <button
              onClick={ this.props.handleSubmit }
              disabled={ !name }
              className="btn btn-primary"
              >
              Submit
            </button>
          </div>
        </form>
        {
          this.props.warning &&
          <div className="alert alert-danger" role="alert">THAT WAS A DUPLICATE!</div>
        }
      </div>
    )
  }
}

 export default NewCompany;
