import React, { useState , useEffect } from 'react'
import Nav from './Nav'
import { Button, Container,Table } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip';
import firebase from 'firebase'
//import Chart from 'react-apexcharts'
import '../assets/css/index.css'



const Complaints = () => {
    const [count, setCount] = useState('');
    const [messages, setMessages] = useState('');
    useEffect(() => {
      firebase.firestore().collection('complaints').get().then(snap => {
        setCount(snap.size) // will return the collection size
      });

      firebase.firestore()
      .collection('complaints')
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
    }, [count])

    async function handlesolve(index){
      await firebase.firestore().collection('complaints').doc(index).update({status : 'solved'}).then(value => {
        console.log(value);
      }).catch(err => {
        alert("not updated");
      })
    }

    
  


  return (
    <div>
        {/* <Nav/> */}
        <ReactTooltip />
        <Container>
        <div className='align'>
        <h4 className='font_m'>Complaints</h4>
        <div className='attendance'>
            <h5 className="bolder">Total Complaints : <span className='spanbtn'>{count}</span></h5>
        </div>
        <div>
        <div className="donut">
        {/*<Chart type="pie" width={380} height={380} series={[44, 55, 41, 17, 15]}  options={{labels:['a','b','c','d','e']}}></Chart> */}
      </div>
        <Table responsive="lg">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>ID number</th>
                            <th>Complaint</th>
                            <th>Image</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {messages && messages.map((msg =>
                        <tr>
                        <td>01/04/2022</td>
                        <td>{msg.data.idnumber}</td>
                        <td>{msg.data.complaint}</td>
                        <td><Button variant="info" data-tip="images not available for now">View Image</Button></td>
                        <td className="text-success font-weight-bold">{msg.data.status}</td>
                        <td>
                         {msg.data.status==='forwarded to mess' && <Button variant='success' onClick={e=>handlesolve(msg.id)}>Solve</Button> }
                        </td>
                        </tr>
                       ))}
                    </tbody>
                    </Table>
        </div>
        </div>
        </Container>
    </div>
  )
}

export default Complaints