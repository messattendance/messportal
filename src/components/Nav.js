import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/index.css';
import '../assets/css/assets.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div> 
        <div className='navbar'>
            <h6><Link className='link font_m font_44' to="/">Mess Attendance And Monitoring System</Link></h6>
            <Button variant="info" className='navbutton'>Logout</Button>
        </div>
        <div className="head">
          <h2 className='font_sb text-light  p-3'>Mess Administration</h2>
        </div>
    </div>
    
  )
}

export default Nav