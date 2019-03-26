import React from 'react'
import '../styles/stockDisplay.css'
import '../styles/fonts.css'


const StockDisplayBody = (props) => {


  return (
    <section className="StockDisplayBody">
      {Object.keys(props.stock).length > 0 &&
        <div className="stockDisplayBody-rows">

          <div className="row sDB-item py-2">
            <div className="col-md-6">
              <div className="sDB-flex-left">
                <h4>{props.stock.LastPrice}</h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sDB-flex-right">
                <h5 className={props.stock.ChangePercent > 0 ? 'green-text' : 'red-text'} >{`${props.stock.Change.toFixed(2)} ( ${props.stock.ChangePercent.toFixed(2)}%)`}</h5>
              </div>
            </div>
          </div>

          <div className="row sDB-item py-2">
            <div className="col-sm-6">
              <div className="sDB-flex-left">
                <span className="range-text">Range</span>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="sDB-flex-right">
                <span className='bold-text text-left'>{`${props.stock.Low.toFixed(2)} - ${props.stock.High.toFixed(2)}`}</span>
              </div>
            </div>
          </div>

          <div className="row sDB-item py-2">
            <div className="col-sm-6">
              <div className="sDB-flex-left">
                <span className="range-text">Open</span>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="sDB-flex-right">
                <span className='bold-text'>{`${props.stock.Open} `}</span>
              </div>
            </div>
          </div>

          <div className="row sDB-item py-2">
            <div className="col-sm-6">
              <div className="sDB-flex-left">
                <span className="range-text">Volume</span>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="sDB-flex-right">
                <span className='bold-text'>{`${(props.stock.Volume / 1000000).toFixed(1)}M`}</span>
              </div>
            </div>
          </div>

          <div className="row sDB-item py-2">
            <div className="col-sm-6">
              <div className="sDB-flex-left">
                <span className="range-text">Market Cap</span>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="sDB-flex-right">
                <span className='bold-text'>{`${(props.stock.MarketCap / 1000000000).toFixed(1)}B`}</span>
              </div>
            </div>
          </div>


          <div className="row sDB-item py-2">
            <div className="col-sm-6">
              <div className="sDB-flex-left"></div>
            </div>
            <div className="col-sm-6">
              <div className="sDB-flex-right">
                <span className='range-text'>{`As of ${props.time}`}</span>
              </div>
            </div>
          </div>


        </div>
      }
    </section>
  )
}

export default StockDisplayBody