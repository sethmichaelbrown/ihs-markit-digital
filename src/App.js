import React, { Component } from 'react';
import StockDisplay from './components/StockDisplay'
import dataList from './DataList'

import './App.css';

class App extends Component {
  state = {
    stockList: null
  }

  componentDidMount() {
    this.setState({ ...this.state, stockList: dataList })
  }


  render() {
    return (
      <div className="App">
        {this.state.stockList &&
          <section className="row container ml-2">
            <div className="col-md-6">
              <StockDisplay
                stockList={this.state.stockList} />
            </div>
          </section>}
      </div>
    );
  }
}

export default App;
