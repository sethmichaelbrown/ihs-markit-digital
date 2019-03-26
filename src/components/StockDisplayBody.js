import React from 'react'
import moment from 'moment'


const StockDisplayBody = (props) => {
  

  return (
    <section className="StockDisplayBody">
      {Object.keys(props.stock).length > 0 &&
        <div className="value-list">
        {console.log(props.stock)}
          <ul className='list-group'>

            <li className="list-group-item">
              <div className="row">
                <div className="col-md-10 float-left">
                  {props.stock.LastPrice}
                </div>

                <div className="col-md-2 float-right">
                  <span>{`${props.stock.Change.toFixed(2)} `}</span>
                </div>
              </div>
            </li>

            <li className="list-group-item">
              <div className="row">
                <div className="col-md-7 float-left">
                  Range
                </div>

                <div className="col-md-5 float-right">
                  <span>{`${props.stock.Low.toFixed(2)}-${props.stock.High.toFixed(2)}`}</span>
                </div>
              </div>
            </li>

            <li className="list-group-item">
              <div className="row">
                <div className="col-md-10 float-left">
                  Open
                </div>

                <div className="col-md-2 float-right">
                  <span>{`${props.stock.Open} `}</span>
                </div>
              </div>
            </li>

            <li className="list-group-item">
              <div className="row">
                <div className="col-md-10 float-left">
                  Volume
                </div>

                <div className="col-md-2 float-right">
                  <span>{`${(props.stock.Volume / 1000000).toFixed(1)}M`}</span>
                </div>
              </div>
            </li>

            <li className="list-group-item">
              <div className="row">
                <div className="col-md-10 float-left">
                  Market Cap
                </div>

                <div className="col-md-2 float-right">
                  <span>{`${(props.stock.MarketCap / 1000000000).toFixed(1)}B`}</span>
                </div>
              </div>
            </li>

            <li className="list-group-item">
              <div className="row">
                <div className="col-md-10 float-left">
                 
                </div>

                <div className="col-md-2 float-right">
                  <span>{}</span>
                </div>
              </div>
            </li>

          </ul>
        </div>
      }
    </section>
  )
}

export default StockDisplayBody