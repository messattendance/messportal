import React from 'react'
import { Button, Container  } from 'react-bootstrap'
import Nav from './Nav'
import { Form , Row , Col  } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Updatemenu = () => {
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
                        <Form.Control type = "text"  />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Lunch
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text"  />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Snacks
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type = "text"  />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Dinner
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type = "text" />
                        </Col>
                    </Form.Group>
                    </Form>
                </div>
                <Link to="/"><Button variant="info" className="my-3">Update Menu</Button></Link>
            </div>
        </Container>
    </div>
  )
}

export default Updatemenu