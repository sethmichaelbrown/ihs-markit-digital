import React, { Component } from 'react'
import StockDisplayBody from './StockDisplayBody'
import SearchBar from './SearchBar'

import '../styles/stockDisplay.css'

class StockDisplay extends Component {
  state = {
    defaultStock: {},
    searchQuery: '',
    selectedStock: null,
    invalidSearch: null
  }

  componentDidMount() {
    this.setDefaultStock()
  }

  setDefaultStock = () => {
    this.setState({ ...this.state, defaultStock: this.props.stockList.MSFT })
  }

  setSearchQuery = (event) => {
    this.setState({ ...this.state, searchQuery: event.target.value.toUpperCase() })
  }

  handleSubmit = () => {
    this.setState({...this.state, invalidSearch: null})
    if (this.props.stockList[`${this.state.searchQuery}`]) {
      this.setState({ ...this.state, selectedStock: this.props.stockList[`${this.state.searchQuery}`] })
    }
    else {
      this.setState({ ...this.state, invalidSearch: this.props.stockList.IVD }, () => console.log(this.state))
    }


  }

  render() {
    return (
      <section className="StockDisplay mt-3">
        {this.props.stockList &&
          <section>
            <div className="row">
              <div className="col-md-12">
                <h1>{this.state.selectedStock ? this.state.selectedStock.Name : this.state.defaultStock.Name}</h1>
              </div>

              <div className="col-md-12">
                <StockDisplayBody
                  stock={this.state.selectedStock ? this.state.selectedStock : this.state.defaultStock}
                />
              </div>

              <div className="col-md-12">
                <SearchBar
                  defaultStock={this.state.defaultStock}
                  handleSubmit={this.handleSubmit}
                  invalidSearch={this.state.invalidSearch}
                  setSearchQuery={this.setSearchQuery}
                />
              </div>
            </div>
          </section>
        }
      </section>
    );
  }
}

export default StockDisplay;