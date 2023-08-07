
import React ,{useState,useEffect} from 'react'
import "./Home.css";
import Carousel from 'react-bootstrap/Carousel';
import img1 from './Images/homePage1.jpg';
import img2 from './Images/homePage2.jpg';
import img3 from './Images/homePage3.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { NavLink } from "react-router-dom";
import { FaEye } from 'react-icons/fa';
import axios from 'axios';

export const Home = (props) => {

//this is view count function
const [viewCount, setViewCount] = useState(0);
useEffect(() => {
  fetchViewCount();
}, []);
const fetchViewCount = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/viewcount');
    setViewCount(response.data.viewCount);
  } catch (error) {
    console.error('Error fetching view count', error);
  }
};
const incrementViewCount = async () => {
  try {
    const response = await axios.post('http://localhost:8000/api/viewcount');
    setViewCount(response.data.viewCount);
  } catch (error) {
    console.error('Error incrementing view count', error);
  }
};

  return (
  
< >


    <Carousel >
    <Carousel.Item interval={1000}>
      <img
        Style="height:300px; resizeMode:strech; flex:1; "
        className="d-block w-100"
        src={img2}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>WELCOME TO {props.data}</h3>
        <p>A WEBSITE FOR WEB DEVEOPERS.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
      Style="height:300px"
        className="d-block w-100"
        src={img1}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>LEARN TECHNOLOGIES</h3>
        <p>HOUSE OF WEB DEVELOPMENT AND TECHNOLOGY.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
      Style="height:300px"
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />
      <Carousel.Caption>
        {/* <h3>MY WORK AND SOURCE CODE</h3> */}
        <p>
          JUST CLICK ON MY VIDEO AND GET THE SOURCE CODE AND WE HAVE TECHNICAL ARTICAL ALSO.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  {/* view */}
    <div>
      <FaEye /> {viewCount} views
    </div>
<div className="container">
  <div className="section">
      <h2>TECHNOLOGY PROGRESS BARS</h2>
      <ProgressBar variant="success" animated Style="height:30px;" now={40} label={"HTML"} />
      <ProgressBar variant="info" animated Style="height:30px;" now={10} label={"CSS"}/>
      <ProgressBar variant="warning" animated Style="height:30px;"  now={60} label={"JAVASRIPT"}/>
      <ProgressBar variant="danger" animated  Style="height:30px;" now={80} label={"REACTJS"}/>
      <ProgressBar variant="success" animated  Style="height:30px;" now={70} label={"ANGULAR"} />
      <ProgressBar variant="dark" animated   Style="height:30px;" now={33} label={"PWA"}/>
      <ProgressBar variant="warning" animated Style="height:30px;" now={80} label={"PHP"}/>
      <ProgressBar variant="danger" animated Style="height:30px;" now={67} label={"BOOTSTRAP"}/>
    </div>
   

   
    <div className="section">
    <Card className="text-center" id="cardbody">
      <Card.Header className="heading">JAVASCRIPT</Card.Header>
      <Card.Body>
        <Card.Title>SCRIPTING LANGUAGE</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Learn JavaScript</Button>
      </Card.Body>
      <Card.Footer className="text-muted">with code</Card.Footer>
    </Card>
    <Card className="text-center" id="cardbody">
      <Card.Header className="heading">JAVA</Card.Header>
      <Card.Body>
        <Card.Title>PROGRAMMING LANGUAGE</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Learn Java</Button>
      </Card.Body>
      <Card.Footer className="text-muted">with code</Card.Footer>
    </Card>
    <Card className="text-center" id="cardbody">
      <Card.Header className="heading">NODEJS</Card.Header>
      <Card.Body>
        <Card.Title>PROGRAMMING LANGUAGE</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Learn NodeJS</Button>
      </Card.Body>
      <Card.Footer className="text-muted">with code</Card.Footer>
    </Card>
    <Card className="text-center" id="cardbody">
      <Card.Header className="heading">C PROGRAMMING</Card.Header>
      <Card.Body>
        <Card.Title>PROGRAMMING LANGUAGE</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Learn C</Button>
      </Card.Body>
      <Card.Footer className="text-muted">with code</Card.Footer>
    </Card>
    </div>


     <div className="section ">
     <Row xs={1} md={4} className="g-4">
        <Col>
          <Card id="cardsbody">
          <Card.Header className="heading">ABOUT CODING</Card.Header>
            <Card.Body>
              <Card.Title>Basic Information</Card.Title>
              <Card.Text>
              Computer coding is the use of computer programming languages to give computers and machines a set of instructions on what actions to perform.
              What is coding? Coding, sometimes called computer programming, is how we communicate with computers. Code tells a computer what actions to take, and writing code is like creating a set of instructions. By learning to write code, you can tell computers what to do or how to behave in a much faster way.

              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
    
        <Col>
          <Card id="cardsbody">
          <Card.Header className="heading">MY WEBSITE</Card.Header>
            <Card.Body>
              <Card.Title>Web Developers Use</Card.Title>
              <Card.Text>
              Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java,Reacjs etc.
              The other websites discussed in this article are helpful in improving your programming and coding skills with actual practice questions and other beneficial resources for different types of users.
              
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
    
        <Col>
          <Card id="cardsbody">
          <Card.Header className="heading">NEWS</Card.Header>
            <Card.Body>
              <Card.Title>News IT Fields</Card.Title>
              <Card.Text>
              Find the latest Programming news from WIRED. See related science and technology articles, photos, slideshows and videos.
              All developer news in one place. Get a feed of the best developer news out there! ... No sign up needed. A joke about programming news.

              </Card.Text>
              <Button variant="primary"><NavLink to="/blog" className="nav-link">Read More</NavLink></Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card id="cardsbody">
          <Card.Header className="heading">ABOUT </Card.Header>
            <Card.Body>
              <Card.Title>Basic Information</Card.Title>
              <Card.Text>
              Hey, this is my homepage, so I have to say something about myself. Sometimes it is hard to introduce yourself because you know yourself so well that you do not know where to start with. Here it goes.

              </Card.Text>
              {/* <Button variant="primary">Read More</Button> */}
              <Button variant="primary"> <NavLink to="/about" className="nav-link" onClick={incrementViewCount}>Read More</NavLink></Button> 
            </Card.Body>
          </Card>
        </Col>
    
    </Row>
     </div>


    </div>
  
  </>
  );
};
