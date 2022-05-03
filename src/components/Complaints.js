import React, { useState, useEffect } from "react";
// import Nav from "./Nav";
import { Button, Modal, Image, Container, Table } from "react-bootstrap";
import firebase from "firebase";
const Complaints = () => {
  const [count, setCount] = useState("");
  const [messages, setMessages] = useState("");

  // Handle image
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [imgUrl, setImageUrl] = useState("");
  const handleShow = (url) => {
    setShow(true);
    setImageUrl(url);
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("complaints")
      .get()
      .then((snap) => {
        setCount(snap.size); // will return the collection size
      });

    firebase
      .firestore()
      .collection("complaints")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, [count]);

  async function handlerevoke(index) {
    await firebase
      .firestore()
      .collection("complaints")
      .doc(index)
      .update({ status: "rejected" })
      .then(() => console.log("hi"))
      .catch((err) => {
        console.error(err);
      });
  }
  async function handleforward(index) {
    await firebase
      .firestore()
      .collection("complaints")
      .doc(index)
      .update({ status: "forwarded to mess" });
  }
  return (
    <div>
      <Container>
        <div className="align">
          <Button variant="info" className="py-3 my-3">
            Complaints
          </Button>
          <div className="attendance">
            <h5>
              Total Complaints : <span className="decor">{count}</span>
            </h5>
          </div>
          <div>
            <Table responsive="lg" striped bordered>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>ID number</th>
                  <th>Complaint</th>
                  <th>Image</th>
                  <th>Status</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {messages &&
                  messages.map((msg, index) => (
                    <tr key={index}>
                      <td>01/04/2022</td>
                      <td>{msg.data.idnumber}</td>
                      <td>{msg.data.complaint}</td>
                      <td>
                        <Button
                          variant="info"
                          onClick={() =>
                            handleShow(msg.data.imgUrl ? msg.data.imgUrl : null)
                          }
                        >
                          View Image
                        </Button>
                      </td>
                      <td className="text-success font-weight-bold">
                        {msg.data.status}
                      </td>
                      <td>
                        {msg.data.status === "initiated" && (
                          <Button
                            variant="danger"
                            onClick={(e) => handlerevoke(msg.id)}
                          >
                            Revoke
                          </Button>
                        )}
                      </td>
                      <td>
                        {msg.data.status === "initiated" && (
                          <Button
                            variant="primary"
                            onClick={(e) => handleforward(msg.id)}
                          >
                            Forward to mess
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton />
              <Modal.Body>
                <center>
                  <Image src={imgUrl} rounded fluid />
                </center>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Complaints;
