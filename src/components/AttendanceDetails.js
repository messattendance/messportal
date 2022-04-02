import React from 'react'
import { Container ,Button , Table} from 'react-bootstrap'
import '../assets/css/index.css'
import Nav from './Nav'

const AttendanceDetails = () => {
  return (
    <div>
        <Nav/>
        <Container>
            <div className='align'>
                <Button variant='info' className='py-3 my-3'>Attendance</Button>
                <div className="attendance">
                    <h5 className='px-3'>Total Count : <span className='decor'>58</span></h5>
                    <h5 className='px-3'>Breakfast</h5>
                    <h5 className='px-3'>Date : 02/04/2022</h5>
                </div>
                <Table responsive="lg">
                    <thead>
                        <tr>
                            <th>Attendees</th>
                            <th>Arrival Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>s160001</td>
                        <td>8:22 Am</td>
                        </tr>
                        <tr>
                        <td>s160002</td>
                        <td>8:30 Am</td>
                        </tr>
                        <tr>
                        <td>s160003</td>
                        <td>8:45 Am</td>
                        </tr>
                    </tbody>
                    </Table>
            </div>
        </Container>
    </div>
  )
}

export default AttendanceDetails