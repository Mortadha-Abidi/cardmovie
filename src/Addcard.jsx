import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.css'

export const Addcard = ({add}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [posterUrl, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setYear] = useState("");
  const handleSubmit=(e)=>{
    e.preventDefault()
    const newMovie={
      id:Math.random(),
      title,
      posterUrl,
      description,
      rating

    }
    add(newMovie)
    handleClose()
  }

  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <Button variant="warning" onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new movie</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
        <Modal.Body>
          
          <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">title</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">posterUrl</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={posterUrl}
          onChange={(e)=>setImage(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">description</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">rating</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={rating}
          onChange={(e)=>setYear(e.target.value)}
        />
      </InputGroup>
        
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type='submit' onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type='submit' onClick={handleClose}>
            Save Changes
          </Button>
          
        </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}
