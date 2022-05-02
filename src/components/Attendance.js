import React , { useState ,useEffect,useRef } from 'react'
import { Container , Button, Form ,Row,Col} from 'react-bootstrap'
import Nav from './Nav'
import '../assets/css/index.css';
import '../assets/css/assets.css';
import { Link } from 'react-router-dom';
import iconb from '../assets/images/breakfast.png'
import iconl from '../assets/images/lunch.png'
import icond from '../assets/images/dinner.png'
import firebase from 'firebase';
//import { database } from '../firebase';


const Attendance = () => {
    const [count1 , setCount1] = useState('');
    const [count2 , setCount2] = useState('');
    const [count3 , setCount3] = useState('');
    const [todays , setToday] = useState('');

  const [breakfast,setBreakfast] = useState('');
  const [lunch , setLunch] = useState('');
  const [dinner , setDinner] = useState('');

    const datee = useRef();
    useEffect(() => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = dd + '-' + mm + '-' + yyyy;
        setToday(today);
        const Dinner  = firebase.database().ref(today+' Dinner');
        const Lunch  = firebase.database().ref(today+' Lunch');
        const Breakfast  = firebase.database().ref(today+' Breakfast');
        setDinner('/attendancedetails/'+today+'/Dinner');
        setLunch('/attendancedetails/'+today+'/Lunch');
        setBreakfast('/attendancedetails/'+today+'/Breakfast');
      console.log(today)
      Breakfast.on('value', (snapshot) => {
        setCount1(snapshot.numChildren());
      })

      Lunch.on('value', (snapshot) => {
        setCount2(snapshot.numChildren());
      })

      Dinner.on('value', (snapshot) => {
        setCount3(snapshot.numChildren());
      })
    }, [])
    
    function handledate (){
        var tod = datee.current.value;
        var today = tod.substring(8,10)+'-'+tod.substring(5,7)+'-'+tod.substring(0,4);
        setToday(today);
        const Dinner  = firebase.database().ref(today+' Dinner');
        const Lunch  = firebase.database().ref(today+' Lunch');
        const Breakfast  = firebase.database().ref(today+' Breakfast');
        setDinner('/attendancedetails/'+today+'/Dinner');
        setLunch('/attendancedetails/'+today+'/Lunch');
        setBreakfast('/attendancedetails/'+today+'/Breakfast');
console.log(today)
      Breakfast.on('value', (snapshot) => {
        setCount1(snapshot.numChildren());
      })

      Lunch.on('value', (snapshot) => {
        setCount2(snapshot.numChildren());
      })

      Dinner.on('value', (snapshot) => {
        setCount3(snapshot.numChildren());
      })
    }

  return (
    <div>
        {/* <Nav/> */}
        <Container>
            <div className='align'>
                <h4 className='font_m'>DH8 Attendance</h4>
                <div className='container d-flex justify-content-between m-3'>   
                  <div>
                      <h6 className='font_m'>Date : {todays}</h6>
                  </div>
                  <div>
                    <h6 className='font_m'>DH- 08 total count <span className='decor bg_color_orange '>920</span></h6>
                  </div>
                </div>
                
                <Form>
                    <Form.Group className="mb-3" controlId="formPlaintextPassword">
                        <Row>
                          <Col>
                              <Form.Control type="date" placeholder="Password" ref={datee}  onChange={handledate}/>
                          </Col>
                        </Row>
                    </Form.Group>
                </Form>

                <div className='flexboxes'>
                  <Row>
                    <Col>
                      <div className='innerbox bg-white shadow p-3 mb-5 rounded h-auto'>
                          <div className='innerflex'>
                          <img src={iconb}  className="rounded my-3" width={60} height={60} />
                              <h5 className='font_m opacity-50'>Breakfast</h5>
                              <h4 className='font_m'>Attended : { count1 }</h4>
                              <Link to={breakfast}><Button variant='none' className="my-2 md-auto py-2 bg_color_dark text-white button font_m">View Details</Button></Link>
                          </div>
                      </div>
                    </Col>
                   <Col>
                       <div className='innerbox  bg-white shadow p-3 mb-5 rounded h-auto'>
                        <div className='innerflex'>
                        <img src={iconl}  className="rounded my-3" width={60} height={60} />
                            <h5 className='font_m opacity-50'>Lunch</h5>
                            <h4 className='font_m'>Attended : { count2 }</h4>
                            <Link to={lunch}><Button variant='none' className="my-2 md-auto py-2 bg_color_dark text-white button font_m">View Details</Button></Link>
                        </div>
                    </div>
                   </Col>
                   
                   <Col>
                      <div className='innerbox  bg-white shadow p-3 mb-5 rounded h-auto'>
                        <div className='innerflex'>
                        <img src={icond}  className="rounded my-3" width={60} height={60} />
                            <h5 className='font_m opacity-50'>Dinner</h5>
                            <h4 className='font_m'>Attended : { count3 }</h4>
                            <Link to={dinner}><Button variant='none' className="my-2 md-auto py-2 bg_color_dark text-white button font_m">View Details</Button></Link>
                        </div>
                    </div>
                   </Col>
                    
                  </Row>
                    
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Attendance