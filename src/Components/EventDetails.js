import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const EventDetails = () => {
  const { id } = useParams();
  const {
    data: event,
    error,
    isPending,
  } = useFetch('http://localhost:8000/events/' + id);

  return (
    <div className='event-details'>
      {isPending && <div>loading</div>}
      {error && <div>{error}</div>}
      {event && (
        <article>
          <h2>{event.title}</h2>
          <p>Hosted by {event.organiser}</p>
          <p>Location {event.location}</p>
          <p>Date {event.date}</p>
          <div>{event.description}</div>
        </article>
      )}
<div className='lg-button'><button type='submit'>Book Event</button>
</div>

    </div>
  );
};

export default EventDetails;
