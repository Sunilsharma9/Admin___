import React from 'react'
import logo from '../../images/logo.png'
import ClearIcon from '@mui/icons-material/Clear';
import HomeIcon from '@mui/icons-material/Home';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import { Link ,useLocation} from "react-router-dom";
import WindowIcon from '@mui/icons-material/Window';
import ListGroup from "react-bootstrap/ListGroup";




const Sidebar = () => {
    let location= useLocation();
  function myStyle() {
    var element = document.body;
    element.classList.toggle("for_active");
  }
    

    function Clear_button() {
        document.body.classList.remove('changeStyle');
      }

  return (
    <div className="sidebar">
    <button type="button" className="clear_button" id="myDIV" onClick={() => {
          Clear_button();
        }}>
        <ClearIcon className="clear_icon"/>
    </button>
    <div className="logo">
            <WindowIcon className="window"/>
                <p>Cryptico.</p>
    </div>

    <ListGroup>
      <Link to="/" className={location.pathname === '/' ? "nav-link activeLink" : ' nav-link'}><HomeIcon className="home"/><span> Home</span></Link>
      <Link to="/form" className={location.pathname === '/form' ? "nav-link activeLink" : ' nav-link'}> <InsertDriveFileIcon className="home"/> <span>Form</span></Link>
      <Link to="/table" className={location.pathname === '/table' ? "nav-link activeLink" : ' nav-link'}><CalendarViewMonthIcon className="home"/> <span>Tables </span></Link>
      {/* <ListGroup.Item><CalendarViewMonthIcon className="home"/><Link to="/">Calender</Link></ListGroup.Item>
      <ListGroup.Item><CalendarViewMonthIcon className="home"/><Link to="/">Email</Link></ListGroup.Item>
      <ListGroup.Item><CalendarViewMonthIcon className="home"/><Link to="/">Invoices</Link></ListGroup.Item>
      <ListGroup.Item><CalendarViewMonthIcon className="home"/><Link to="/">Contacts</Link></ListGroup.Item>
      <ListGroup.Item><CalendarViewMonthIcon className="home"/><Link to="/">Icons</Link></ListGroup.Item> */}
      
      
    </ListGroup>
  </div>
  )
}

export default Sidebar