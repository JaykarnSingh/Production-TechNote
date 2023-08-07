import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./AdminProfile.css"
import { NavLink } from "react-router-dom";
import { Modal } from 'react-bootstrap';
const AdminProfile = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Admin basic data get after login......................
  
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/getAdmindata")
        .then((resp) => resp.json())
        .then((result) => {
          setData(result);
          setIsLoading(false); // Set loading to false once data is fetched
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setIsLoading(false); // Set loading to false in case of an error as well
        });
    }, 2000); // Show the spinner for 2 seconds
  }, []);

  //after logout go back admin login page
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear();
    navigate('/admin')
  }

  //this is for paragraph scroll and change colors every time
  const text =
    'The Admin Login page allows authorized administrators to access the system by providing their email and password';
  const [colorIndex, setColorIndex] = useState(0);
  useEffect(() => {
    const colors = ['red', 'blue', 'green', 'orange']; // Add more colors if needed
    const interval = setInterval(() => {
      setColorIndex((prevColorIndex) => (prevColorIndex + 1) % colors.length);
    }, 0);

    return () => clearInterval(interval);  
  }, []);
  const colors = ['red', 'blue', 'green', 'orange']; // Define the colors array here as well

  //open poup if click any li
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (

    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active" onClick={() => handleOpenModal('HTML')}>
            <NavLink className="nav-link" >HTML</NavLink>
          </li>
          <li className="nav-item" onClick={() => handleOpenModal('CSS')}>
            <NavLink className="nav-link">CSS</NavLink>
          </li>
          <li className="nav-item" onClick={() => handleOpenModal('JAVASCRIPT')}>
            <NavLink className="nav-link" >JAVASCRIPT</NavLink>
          </li>
          <li className="nav-item" onClick={() => handleOpenModal('REACTJS')}>
            <NavLink className="nav-link" >REACTJS</NavLink>
          </li>
          <li className="nav-item" onClick={() => handleOpenModal('NODEJS')}>
            <NavLink className="nav-link" >NODEJS</NavLink>
          </li>
          <li className="nav-item" onClick={() => handleOpenModal('MONGODB')}>
            <NavLink className="nav-link" >MONGODB</NavLink>
          </li>
          <li className="nav-item" onClick={() => handleOpenModal('BOOTSTRAP')}>
            <NavLink className="nav-link" >BOOTSTRAP</NavLink>
          </li>
        </ul>
      </nav>

      {/* this is popup stucture */}
      <Modal show={showModal} onHide={handleCloseModal} animation={false} centered dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "bold" }}>{selectedItem}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
      </Modal>
      <div>
        <marquee> <p style={{ fontWeight: 'bold', color: colors[colorIndex] }}>{text}</p></marquee>
      </div>
      <div className='AdminDataCard'>

      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
          
        ) : (
          <div>

        <button className='btn btn-danger' onClick={logout} style={{ marginRight: '10rem' }}>Logout</button>
        {
          data.map((Item) => {
            return (
              <div className='CardData'>
                <Card style={{ width: '30rem', marginTop: '5rem', marginBottom: '5rem' }} >
                  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                  <Card.Body>
                    <Card.Title>{Item.userRole}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>{Item.firstName}</ListGroup.Item>
                    <ListGroup.Item>{Item.lastName}</ListGroup.Item>
                    <ListGroup.Item>{Item.phone}</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                  </Card.Body>
                </Card>

              </div>
            )
          })
        }  
        </div>
        )}    
      </div>
      </div>
    
  )
}

export default AdminProfile