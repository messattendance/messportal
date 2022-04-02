import React from 'react'
import { Container ,Button , Table} from 'react-bootstrap'
import '../assets/css/index.css'
import Nav from './Nav'
const Leavemeal = () => {
  return (
    <div>
        <Nav/>
        <Container>
            <div className='align'>
                <Button variant='info' className='py-3 my-3'>Leave The Meal</Button>
                <h5>Date : 02/04/2022</h5>
                <p>Total number of students who are willing to leave the  meal  :   <span className='decor'>58</span></p>
                <Table responsive="lg">
                    <thead>
                        <tr>
                            <th>ID number</th>
                            <th>Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>s160001</td>
                        <td>Parent Visit</td>
                        </tr>
                        <tr>
                        <td>s160002</td>
                        <td>Food Court</td>
                        </tr>
                        <tr>
                        <td>s160003</td>
                        <td>Not Intrested In Menu</td>
                        </tr>
                    </tbody>
                    </Table>
            </div>
        </Container>
    </div>
  )
}

export default  Leavemeal
