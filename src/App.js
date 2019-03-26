import React, { Component } from 'react';
import StockDisplay from './components/StockDisplay'
import dataList from './DataList'

import './App.css';

class App extends Component {
  state = {
    stockList: {}
  }

  componentDidMount() {
    this.setState({ ...this.state, stockList: dataList })
  }


  render() {
    return (
      <div className="App">
        <StockDisplay
          stockList={this.state.stockList} />
      </div>
    );
  }
}

export default App;
