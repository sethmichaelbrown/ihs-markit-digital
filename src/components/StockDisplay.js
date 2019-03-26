import React, { Component } from 'react'
import StockDisplayBody from './StockDisplayBody'
import SearchBar from './SearchBar'

import '../styles/stockDisplay.css'

class StockDisplay extends Component {
  state = {
    defaultStock: {},
    searchQuery: '',
    selectedStock: null,
    invalidSearch: null,
    time: null
  }

  componentDidMount() {
    this.setDefaultStock()
  }

  setDefaultStock = async () => {
    const time = this.props.stockList.MSFT.Timestamp.split(' ')[3]
    await this.parseTime(time)
    
    const defaultStock = this.props.stockList.MSFT
    defaultStock.Name = defaultStock.Name.toUpperCase()
    this.setState({ ...this.state, defaultStock: this.props.stockList.MSFT })
  }

  setSearchQuery = (event) => {
    this.setState({ ...this.state, searchQuery: event.target.value.toUpperCase() })
  }

  handleSubmit = async () => {
    const time = this.props.stockList[`${this.state.searchQuery}`].Timestamp.split(' ')[3]
    await this.parseTime(time)
    this.setState({ ...this.state, invalidSearch: null })

    if (this.props.stockList[`${this.state.searchQuery}`]) {
      const selected = this.props.stockList[`${this.state.searchQuery}`]
      selected.Name = selected.Name.toUpperCase()
      this.setState({ ...this.state, selectedStock: selected })
    }
    else {
      this.setState({ ...this.state, invalidSearch: this.props.stockList.IVD })
    }
  }

  parseTime = (time) => {
    let isoTime = time.split(':')

    if (parseInt(isoTime[0]) === 0) {
      isoTime[0] = '12'
      isoTime = `${isoTime.join(':')} AM`
    }
    else if (parseInt(isoTime[0]) > 12) {
      isoTime[0] = `0${parseInt(isoTime[0]) - 12}`
      isoTime = `${isoTime.join(':')} PM`
    }
    else {
      isoTime = `${isoTime.join(':')} AM`
    }
    this.setState({ ...this.state, time: isoTime })
  }

  render() {
    return (
      <section className="StockDisplay mt-3">
        {this.props.stockList && this.state.defaultStock &&
          <section>
            <div className="row">
              <div className="col-sm-12 my-2">
                <h3>{this.state.selectedStock ? this.state.selectedStock.Name : this.state.defaultStock.Name}</h3>
              </div>

              <div className="col-sm-12">
                <StockDisplayBody
                  stock={this.state.selectedStock ? this.state.selectedStock : this.state.defaultStock}
                  time={this.state.time}
                />
              </div>

              <div className="row mt-2">
                <div className="col-sm-12">
                  <SearchBar
                    defaultStock={this.state.defaultStock}
                    handleSubmit={this.handleSubmit}
                    invalidSearch={this.state.invalidSearch}
                    setSearchQuery={this.setSearchQuery}
                  />
                </div>
              </div>
            </div>
          </section>
        }
      </section>
    );
  }
}

export default StockDisplay;