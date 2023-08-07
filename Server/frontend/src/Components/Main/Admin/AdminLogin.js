



import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
function AdminLogin() {
   const auth=localStorage.getItem('user');
   
    const navigate=useNavigate();

    if(auth){
        navigate('/adminprofile')
       }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    fetch('http://localhost:8000/PostUserData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(response => {
        if (response.status === 200) {
          setStatus('Login successful');
          return response.json();
        } else if (response.status === 401) {
          setStatus('Invalid email or password');
        } else if (response.status === 403) {
          setStatus('Access denied');
        } else {
          setStatus('Error during login');
        }
      })
      .then(data => {
        if (data) {
          setEmail('');
          setPassword('');
          navigate('/adminprofile')
          localStorage.setItem('user', JSON.stringify(data));
        }
      })
      .catch(error => {
        console.error(error);
        setStatus('Error during login');
      });
  }

  return (
    <div className='container' style={{ width: '500px', margin: 'auto', marginTop: '100px' }}>
      <h1>Admin Login</h1>
      {status && <p>{status}</p>}
      <Form className='loginForm' onSubmit={handleLogin}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type='password'
            placeholder='Password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>

  );
}

export default AdminLogin;
