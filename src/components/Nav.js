import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/index.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <> 
        <div className='navbar'>
            <h3 className='link'><Link to="/">Mess Attendance System</Link></h3>
            <Button variant="info" className='navbutton'>Logout</Button>
        </div>
    </>
    
  )
}

export default Nav