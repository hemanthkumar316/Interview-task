import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import './TimePanel.css'
import axios from 'axios'
const TimePanel = () => {

    const [fetchdata, setFetchdata] = useState([])
    let [time, setTime] = useState("")
    let [date, setDate] = useState()
    let [day, setDay] = useState()
    let today = new Date()
    let date1 = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day1 = weekday[today.getDay()];
    useEffect(() => {
        let hour = new Date().toLocaleTimeString().substr(0, 4) + new Date().toLocaleTimeString().substr(7, 8)
        setTime(hour)
        setDate(date1)
        setDay(day1)
        axios.get('http://localhost:5000/task/getusers')
            .then(response => response.data)
            .then(data => setFetchdata(data))
    }, [time])

    return <>
        <div className="container">

            <div className="row">
                <div className="col colclass">
                    <select id='btn'>
                        <option>Recent Activities</option>
                        <option>Raised Ticket</option>
                        <option>Pending Ticket</option>
                        <option>Pending Ticket1</option>
                        <option>Pending Ticket2</option>
                        <option>Pending Ticket3</option>
                    </select>
                    <button id='btn'><FontAwesomeIcon icon={faRightFromBracket} /></button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            <p id='time'>{time}</p>
                            <h6>India</h6>
                        </div>
                        <div id='date' className="card-body">
                            <span>{day}</span>
                            <p>{date}</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <div class="card" style={{ width: '24rem' }}>
                        <div class="card-header mb-3">
                            <h2> LeaderBoard</h2>
                            <p>Across helpdesk this month</p>
                            <h5 className='text-primary  text-right'>More..</h5>
                        </div>

                        {
                            fetchdata.map((user) => {
                                return (
                                    <div className='d-md-flex  justify-content-between mb-2'>
                                        <img src={user.image} alt='profileimage' width={'70px'} height={'70px'} style={{ borderRadius: "40px" }} />
                                        <p>{user.name}</p>
                                        <p>{user.role}</p>

                                    </div>

                                )
                            })
                        }


                    </div>
                </div>
            </div>
        </div>
    </>
}

export default TimePanel