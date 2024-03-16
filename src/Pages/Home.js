import Carousel from 'react-bootstrap/Carousel';
import a from '../Components/Assets/a.jpg';
import b from '../Components/Assets/b.jpg';
import c from '../Components/Assets/c.jpg';
import d from '../Components/Assets/d.jpg';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../Components/Assets/welcome.json';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';





const Home = () => {
  return (
    <>
    <div style={ {textAlign: 'center', fontStyle:'bold', fontFamily: 'cursive'} }>
      <h1></h1>
      <Carousel interval={2500}>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto" 
            src={a}
            alt="First slide"
            style={{ maxHeight: '500px' }} 
          />
          <Carousel.Caption>
            <h3>Highlights</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto" 
            src={b}
            alt="Second slide"
            style={{ maxHeight: '500px' }} 
          />
          <Carousel.Caption>
            <h3>Highlights</h3>          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto" 
            src={c}
            alt="Second slide"
            style={{ maxHeight: '500px' }} 
          />
          <Carousel.Caption>
            <h3>Highlights</h3>          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto" 
            src={d}
            alt="Second slide"
            style={{ maxHeight: '500px' }} 
          />
          <Carousel.Caption>
            <h3>Highlights</h3>          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

    <div className='home-container'>
      <div className='home-text'>
        <h1>WELCOME TO MUSE</h1>
        <p>A platform to manage your events.<br/>Trusted by 1000+ users</p>
        <Button variant="primary" size="lg">Get Started </Button>{' '} 
     </div>
      <div className='home-lottie'>
        <Lottie animationData={animationData} />
      </div>
    </div>

    <div className='latest-event'>
      <h6>GLIMPSE OF </h6>
      <h1>LATEST EVENTS</h1>
    </div>

    <div className='latest-card-container'>
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={a} />
          <Card.Body>
            <Card.Title>Young Achievers Conference</Card.Title>
            <Card.Text>
              The YAC is the biggest conference for young brilliant individuals. 
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Tema, Community 9</ListGroup.Item>
            <ListGroup.Item>13th February 2024</ListGroup.Item>
            <ListGroup.Item>10:00am</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={c} />
          <Card.Body>
            <Card.Title>Heat DJ Fest</Card.Title>
            <Card.Text>
              Experience a world where the music never stops.            
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Tema, Community 9</ListGroup.Item>
            <ListGroup.Item>13th February 2024</ListGroup.Item>
            <ListGroup.Item>10:00am</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={d} />
          <Card.Body>
            <Card.Title>Cloud 9</Card.Title>
            <Card.Text>
              Cloud 9 offers ravers the wildest experiences ever
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Osu Oxford Street</ListGroup.Item>
            <ListGroup.Item>6th February 2024</ListGroup.Item>
            <ListGroup.Item>10:00pm</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={b} />
          <Card.Body>
            <Card.Title>Around THe World Tour</Card.Title>
            <Card.Text>
              Joins us as we travel across Europe in 3 weeks
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Europe</ListGroup.Item>
            <ListGroup.Item>9th March 2024</ListGroup.Item>
            <ListGroup.Item>10:00am</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
    </>
  );
}

export default Home;
