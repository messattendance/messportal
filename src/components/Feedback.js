import React from 'react'
import Nav from './Nav'
import {Button, Container} from 'react-bootstrap'


const Feedback = () => {
  return (
    <div>
        <Nav/>
        <Container>
        <div className="align">
          <Button variant='info' className='py-3 my-3'>Feedback</Button>
            <div className="feedback">
              <h5 className='px-3'>Satisfactory</h5>
              <h5 className='px-3'>Below Satisfactory</h5>
              <h5 className='px-3'>Good</h5>
            </div>
          <h5>Total feedback Count :  <span className='decor'>58</span></h5>
        </div>
        <div className='attendance'>
        <Button variant="info" className="my-3">View More</Button>
        <Button variant="info" className="my-3">View More</Button>
        <Button variant="info" className="my-3">View More</Button>
      </div>
        </Container>
        
    </div>
  )
}

export default Feedback