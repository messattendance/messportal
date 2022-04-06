import React, { useRef } from 'react'
import { Container , Button, Form ,Row,Col} from 'react-bootstrap'
import Nav from './Nav'
import '../assets/css/index.css';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { useEffect , useState } from 'react';

const Attendance = () => {
    const dat= useRef('');
  const [count1 , setCount1] = useState('');
  const [count2 , setCount2] = useState('');
  const [count3 , setCount3] = useState('');

  useEffect(() => {
    let dt=dat.current.value;
        const Breakfast = firebase.database().ref("31-03-2022 Lunch");
        const Lunch = firebase.database().ref("31-03-2022 Lunch");
        const Dinner = firebase.database().ref("31-03-2022 Lunch");

        Breakfast.on('value', (snapshot) => {
          setCount1(snapshot.numChildren());
        })
  }, [])
  

 function View(){
    let dt=dat.current.value;
        const Breakfast = firebase.database().ref("31-03-2022 Lunch");
        const Lunch = firebase.database().ref("31-03-2022 Lunch");
        const Dinner = firebase.database().ref("31-03-2022 Lunch");

        Breakfast.on('value', (snapshot) => {
          setCount1(snapshot.numChildren());
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
                    </Form.Group>
                </Form>
                <div className='flexboxes'>
                    <div className='innerbox'>
                        <div className='innerflex'>
                            <h5>Breakfast</h5>
                            <p>Attended : { count1 }</p>
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