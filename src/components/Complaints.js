import React from 'react'
import Nav from './Nav'
import { Button, Container,Table } from 'react-bootstrap'

const Complaints = () => {
  return (
    <div>
        <Nav/>
        <Container>
        <div className='align'>
        <Button variant='info' className='py-3 my-3'>Complaints</Button>
        <div className='attendance'>
            <h5>Total Complaints : <span className='decor'>35</span></h5>
        </div>
        <div>
        <Table responsive="lg">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>ID number</th>
                            <th>Complaint</th>
                            <th>Image</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>01/04/2022</td>
                        <td>S160897</td>
                        <td>Plates Damage</td>
                        <td><Button variant="info">View Image</Button></td>
                        <td className="text-success font-weight-bold">Solved</td>
                        </tr>
                        <tr>
                        <td>01/04/2022</td>
                        <td>S160840</td>
                        <td>Tap Leakage</td>
                        <td><Button variant="info">View Image</Button></td>
                        <td className="text-primary font-weight-bold">Noted</td>
                        </tr>
                        <tr>
                        <td>02/04/2022</td>
                        <td>S160732</td>
                        <td>Cleanliness</td>
                        <td><Button variant="info">View Image</Button></td>
                        <td className="text-danger font-weight-bold">Initiated</td>
                        </tr>
                    </tbody>
                    </Table>
        </div>
        </div>
        </Container>
    </div>
  )
}

export default Complaints