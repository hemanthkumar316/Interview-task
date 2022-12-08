import React from 'react'
import Navbar from '../../Navbar/Navbar'
import TicketCard from '../TicketCard/TicketCard'
import TimePanel from '../TimePanel/TimePanel'
const Dashboard = () => {
  return <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-1">
          <Navbar />
        </div>
        <div className="col-md-11 mt-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <TicketCard />
              </div>
              <div className="col-md-4">
                <TimePanel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Dashboard