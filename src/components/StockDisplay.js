import React, { Component } from 'react'

import '../styles/stockDisplay.css'

class StockDisplay extends Component {
  state = {

  }

  render() {
    return (
      <section className="StockDisplay">
        {this.props.stockList &&
          <h1>Hello from Stock Display</h1>
        }

      </section>
    );
  }
}

export default StockDisplay;