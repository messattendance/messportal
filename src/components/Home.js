import React from 'react'
import { Tabs,Tab, Nav, Col, Row, Container, Stack } from 'react-bootstrap'
import {TabContainer, TabPane , TabContent} from 'react-bootstrap'
import { useState } from 'react'
import Attendance from './Attendance'
import Updatemenu from './Updatemenu'
import Feedback from './Feedback'
import Complaints from './Complaints'
import Leavemeal from './Leavemeal'
import Navv from './Nav'
const Home = () => {
    
  return (
  <div>
       
       <Navv/>
       <Tab.Container id="" defaultActiveKey="first" className="mt-20" >

        <Col>
        <Nav variant="pills" className="flex-column">
        <Row xs lg={6} className='justify-content-center'>
          <Nav.Item >
            <div className='bg-light text-center' >
              <Nav.Link eventKey="first">Attendance</Nav.Link>
            </div>            
          </Nav.Item >

          <Nav.Item>
          <div className='bg-light text-center' >
          <Nav.Link eventKey="second">Update Menu</Nav.Link>
          </div>
            
          </Nav.Item>
          <Nav.Item  >

          <div className='bg-light text-center' >
          <Nav.Link eventKey="third">Feedback</Nav.Link>
          </div>
          </Nav.Item>
          <Nav.Item >
          <div className='bg-light text-center' >
          <Nav.Link eventKey="fourth">Complaints</Nav.Link>
          </div>
          </Nav.Item>
          <Nav.Item >
          <div className='bg-light text-center' >
          <Nav.Link eventKey="fifth">Leavemeal</Nav.Link>
          </div>
          </Nav.Item>
          </Row>
        </Nav>
        
      <Row sm={9}>
        <Tab.Content>
          <Tab.Pane eventKey="first">
             <div className='container bg-light'><Attendance/></div>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
           <Updatemenu/>
          </Tab.Pane>
          <Tab.Pane eventKey="third">
           <Feedback/>
          </Tab.Pane>
          <Tab.Pane eventKey="fourth">
           <Complaints/>
          </Tab.Pane>
          <Tab.Pane eventKey="fifth">
           <Leavemeal/>
          </Tab.Pane>
        </Tab.Content>
      </Row>
    </Col>
  </Tab.Container>
   </div>
    
  )
}

export default Home