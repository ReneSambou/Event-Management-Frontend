import { useEffect, useState } from "react";
import Events from "../Components/Events";
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setEvents]);

  return (
    <div>
      <h1>Welcome to My Website</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/home/rene/Desktop/Projects/event-management-system/src/Components/Assets/dance.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Description of the first slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/home/rene/Desktop/Projects/event-management-system/src/Components/Assets/loginbg.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Description of the second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
}

export default Home;
