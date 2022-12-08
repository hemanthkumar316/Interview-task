import React from 'react'
import './Navbar.css'
import { faHome, faHeadphones, faTachometer, faChartBar, faUser, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  return <>
    <nav id='navbar'>
      <a id="icons" href='https://www.spotify.com/'><FontAwesomeIcon icon={faHeadphones} /></a><br />
      <a id="icons" href='https://fast.com/' ><FontAwesomeIcon icon={faTachometer} /></a><br />
      <a id="icons" href='https://blog.logrocket.com/using-chart-js-react/#installing-chart-js-react-project'><FontAwesomeIcon icon={faChartBar} /></a><br />
      <a id="icons" href='/'><FontAwesomeIcon icon={faUser} /></a><br />
      <a id="icons" href=''><FontAwesomeIcon icon={faTicket} /></a><br />
    </nav>
  </>
}

export default Navbar