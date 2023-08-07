import React from 'react'
import './Contact.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useState} from 'react'
import axios from 'axios';

export const Contact = () => {

const [email,setEmail]=useState('');
const [message,setMessage]=useState('');

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(email,message);
  const data={
    email:email,
    message:message
  }
  axios.post("https://sheet.best/api/sheets/db1b85d1-05fa-42d7-8efc-becc4fe7cd88",data).then((response)=>{
  console.log(response); 
  setEmail('');
  setMessage('');
  })
}
  return (  
<>

  
    <div className="container">
      
      <div className="Section">
        <h2>Contact Us</h2>
        <hr className="line"/>
        <hr className="line1"/>
        <hr className="line2"/>
        <hr className="line3"/>
        <hr className="line4"/>
        <hr className="line5"/>
        <hr className="line6"/>
      </div>
       <p>Hello Everyone! Have a great day :) I am here to help you. If you want to know something or you have any suggestion then please mail me. Thank You.</p>
       
       <div className="inputSection">
       <Form onSubmit={handleSubmit}>
      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
        </Form.Group>

      
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1" >
        <Form.Label>Message</Form.Label>
        <Form.Control placeholder="Enter Message" onChange={(e)=>setMessage(e.target.value)} value={message}/>
      </Form.Group>

    

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Uttarakhand</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

       </div>
       
    </div>
</>

  )
}
