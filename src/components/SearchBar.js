import React from 'react'

const SearchBar = (props) => {
  return (
    <section className="SearchBar">
      <div className="row">
        <div className="col-md-6">
          <input onChange={props.setSearchQuery} type="text" className="form-control" id="input-field-1" placeholder="Search Stocks..." />
        </div>
        <div className="col-md-6">
          <button className="btn btn-primary" type="btn" onClick={props.handleSubmit}>Get New Quote</button>
        </div>
        <div className="row mt-2">
          <div className="col-md-12">
            {props.invalidSearch && <div className="alert alert-danger" role="alert">{props.invalidSearch.Message}</div>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchBar