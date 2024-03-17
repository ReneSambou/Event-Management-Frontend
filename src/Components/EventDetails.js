import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import Lottie from 'lottie-react';
import animationData from '../Components/Assets/loading.json';


const EventDetails = () => {
  const { id } = useParams();
  const {
    data: event,
    error,
    isPending,
  } = useFetch('http://localhost:8000/events/' + id);

  return (
    <div className='event-details'>
      {isPending && <div><Lottie animationData={animationData} /></div>}
      {error && <div>{error}</div>}
      {event && (
        <article>
          <h2 className='event-title'>{event.title}</h2>
          <p>Hosted by {event.organiser}</p>
          <p>Location {event.location}</p>
          <p>Date {event.date}</p>
          <div>{event.description}</div>
        </article>
      )}


    </div>
  );
};

export default EventDetails;
