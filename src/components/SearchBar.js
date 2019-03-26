import React from 'react'
import '../styles/stockDisplay.css'

const SearchBar = (props) => {
  return (
    <section className="SearchBar">
      <div className="row">

        <div className="col-sm-6 sDB-flex-left">
          <input onChange={props.setSearchQuery} type="text" className="form-control" id="input-field-1" placeholder="Search Stocks..." />
        </div>
        <div className="col-sm-6 sDB-flex-right">
          <button onClick={props.handleSubmit}>Get New Quote</button>
        </div>
        
        
        <div className="row mt-2">
          <div className="col-sm-12">
            {props.invalidSearch && <div className="alert alert-danger" role="alert">{props.invalidSearch.Message}</div>}
          </div>
        </div>

      </div>
    </section>
  )
}

export default SearchBar