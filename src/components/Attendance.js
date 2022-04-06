import React, { useRef } from 'react'
import { Container , Button, Form ,Row,Col} from 'react-bootstrap'
import Nav from './Nav'
import '../assets/css/index.css';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { useEffect , useState } from 'react';

const Attendance = () => {
    const dat= useRef('');
  const [count , setCount] = useState('');


 function View(){
    let dt=dat.current.value;
        const fetchRef = firebase.database().ref("31-03-2022 Lunch");
        console.log(dt);
        fetchRef.on('value', (snapshot) => {
          setCount(snapshot.numChildren());
        })
      
  }
 

  return (
    <div>
        <Nav/>
        <Container>
            <div className='align'>
                <Button variant="info" className="py-3 my-3">Calendar</Button>
                <h5>Date : 02/04/2022</h5>
                <p>DH- 07 total count :<span className='decor'>920</span></p>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col sm="40">
                        <Form.Control type="date" name="expiredDate" ref={dat} placeholder="Password" />
                        </Col>
                        <Button variant="info" className="my-3" onClick={View}>Go</Button>
                    </Form.Group>
                </Form>
                <div className='flexboxes'>
                    <div className='innerbox'>
                        <div className='innerflex'>
                            <h5>Breakfast</h5>
                            <p>Attended : { count }</p>
                            <Button variant='info' className="my-3 py-3">View Details</Button>
                        </div>
                    </div>
                    <div className='innerbox'>
                        <div className='innerflex'>
                            <h5>Lunch</h5>
                            <p>Attended : 840</p>
                            <Link to='/attendancedetails'><Button variant='info' className="my-3 py-3">View Details</Button></Link>
                        </div>
                    </div>
                    <div className='innerbox'>
                        <div className='innerflex'>
                            <h5>Dinner</h5>
                            <p>Attended : 840</p>
                            <Button variant='info' className="my-3 py-3">View Details</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Attendance