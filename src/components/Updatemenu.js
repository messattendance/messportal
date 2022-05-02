import React from 'react'
import { Button, Container  } from 'react-bootstrap'
import Nav from './Nav'
import { Form , Row , Col  } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { auth ,db } from '../firebase'



const Updatemenu = () => {
    const history = useNavigate();
    const breakfast = useRef('');
    const lunch = useRef('');
    const snacks = useRef('');
    const dinner = useRef('');

    async function updatemenu() {
        let bf= breakfast.current.value; 
        let lch = lunch.current.value;
        let sncks = snacks.current.value;
        let dnr = dinner.current.value;

        let m= await db.collection('menu').doc('avs7rYGkSNUXRCH6latE').set({'breakfast':bf ,'dinner' : dnr ,'lunch':lch, 'snacks' : sncks }).then(result =>{
            history('/');
        }).catch(err =>{
            console.log(err);
        })
    }
  return (
    <div>
       
        <Container>
            <div className='menubtn'>   
            <h4 className='font_m my-2'>Update Menu</h4>
                <h5>Date : 02/04/2022</h5>
                <div className="row menu ">
                    <Col>
                    <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="4" className='font_m opacity-75'>
                            Breakfast
                        </Form.Label>
                        <Col sm="15">
                        <Form.Control type = "text"  ref={breakfast}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="4" className='font_m opacity-75'>
                        Lunch
                        </Form.Label>
                        <Col sm="15">
                        <Form.Control type="text"  ref={lunch} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="4" className='font_m opacity-75'>
                        Snacks
                        </Form.Label>
                        <Col sm="15">
                        <Form.Control type = "text"  ref={snacks} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="4" className='font_m opacity-75'>
                        Dinner
                        </Form.Label>
                        <Col sm="15">
                        <Form.Control type = "text" ref={dinner} />
                        </Col>
                    </Form.Group>
                    </Form>
                    </Col>
               
                </div>
                <Button variant="none" className="my-3 bg_color_dark text-white button font_m"  onClick={updatemenu}>Update Menu</Button>
            </div>
        </Container>
    </div>
  )
}

export default Updatemenu