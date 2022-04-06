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
            history.push('/');
        }).catch(err =>{
            console.log(err);
        })
    }
  return (
    <div>
        <Nav/>
        <Container>
            <div className='menubtn'>   
                <Button variant="info" className="py-3 my-3" >Update Menu</Button>
                <h5>Date : 02/04/2022</h5>
                <div className="menu">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Breakfast
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type = "text"  ref={breakfast}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Lunch
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text"  ref={lunch} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Snacks
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type = "text"  ref={snacks} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Dinner
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type = "text" ref={dinner} />
                        </Col>
                    </Form.Group>
                    </Form>
                </div>
                <Button variant="info" className="my-3" onClick={updatemenu}>Update Menu</Button>
            </div>
        </Container>
    </div>
  )
}

export default Updatemenu