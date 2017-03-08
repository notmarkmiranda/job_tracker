import React, { Component, PropTypes } from 'react';

class NewCompany extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div className="col-md-4">
        <form>
          <input type="text" className="form-control" />
        </form>
      </div>
    )
  }
}

 export default NewCompany
