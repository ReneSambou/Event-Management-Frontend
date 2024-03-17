import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../Components/Assets/event.json';

const EventList = (props) => {
  const events = props.events || [];
  return (
    <div className='event-list-container'>
      
    <div className='event-list'>
      {events.map((event) => (
        <div className='event-preview' key={event.id}>
          <Link to={`/Events/${event.id}`}>
            <h1>{event.title}</h1>
            <p>
              Location: {event.location}
              <br />
              Date: {event.date}
              <br />
            </p>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default EventList;
