import React from 'react'
import './TicketCard.css'
const TicketCard = () => {
  return <>
    <div className="container">
      <div className="row mb-3">
        <select>
          <option>All Group</option>
          <option>Raised Ticket</option>
          <option>Pending Ticket</option>
        </select>
      </div>
      <div className="row ">
        <div className="col-md-12 ">
          <div className="row mb-2 " >
            <div className="card one" >
              <div className="card-header"></div>
              <div className="card-body"><h1>15</h1><h6>Total tickets</h6></div>
            </div>
            <div className="card two">
              <div className="card-header"></div>
              <div className="card-body"><h1>11</h1><h6>Open tickets</h6></div>
            </div>
            <div className="card three">
              <div className="card-header"></div>
              <div className="card-body"><h1>2</h1><h6>Closed tickets</h6></div>
            </div>
            <div className="card four">
              <div className="card-header"></div>
              <div className="card-body"><h1>2</h1><h6>Pending tickets</h6></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">


        <img src='https://www.freakyjolly.com/wp-content/uploads/2020/07/Pasted-into-React-Charts-Responsive-Line-Bar-Pie-Scatter-Charts-Tutorial-using-Recharts-with-Examples.png?ezimgfmt=ng:webp/ngcb11' height={'350%'} width={'400%'} />
      </div>
    </div>
  </>
}

export default TicketCard