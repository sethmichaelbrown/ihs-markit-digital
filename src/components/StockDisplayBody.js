import React from 'react'
import '../styles/stockDisplay.css'
import '../styles/fonts.css'


const StockDisplayBody = (props) => {


  return (
    <section className="StockDisplayBody">
      {Object.keys(props.stock).length > 0 &&
        <div className="stockDisplayBody-rows">

          <div className="row">
            <div className="col-md-6">
              <div className="sDB-flex-left">
                <h4>{props.stock.LastPrice}</h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sDB-flex-right">
                <span className={props.stock.ChangePercent > 0 ? 'green-text' : 'red-text'} >{`${props.stock.Change.toFixed(2)} ( ${props.stock.ChangePercent.toFixed(2)}%)`}</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="sDB-flex-left">
                Range
              </div>
            </div>
            <div className="col-sm-6">
              <div className="sDB-flex-right">
                <span className='bold-text text-left'>{`${props.stock.Low.toFixed(2)}-${props.stock.High.toFixed(2)}`}</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="sDB-flex-left">
                Open
                </div>
            </div>
            <div className="col-sm-6">
              <div className="sDB-flex-right">
                <span className='bold-text'>{`${props.stock.Open} `}</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="sDB-flex-left">
                Volume
                </div>
            </div>
            <div className="col-sm-6">
              <div className="sDB-flex-right">
                <span className='bold-text'>{`${(props.stock.Volume / 1000000).toFixed(1)}M`}</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="sDB-flex-left">
                Market Cap
                </div>
            </div>
            <div className="col-sm-6">
              <div className="sDB-flex-right">
                <span className='bold-text'>{`${(props.stock.MarketCap / 1000000000).toFixed(1)}B`}</span>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-sm-6">
              <div className="sDB-flex-left"></div>
            </div>
            <div className="col-sm-6">
              <div className="sDB-flex-right">
                <span>{`As of ${props.time}`}</span>
              </div>
            </div>
          </div>


        </div>
      }
    </section>
  )
}

export default StockDisplayBody