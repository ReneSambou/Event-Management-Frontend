const Events = ({ events, title }) => {
  return (
    <div className="event-list">
      <h2>{title}</h2>
      {events.map(event => (
        <div className="event-preview" key={event.id}>
          <h2>{event.title}</h2>
          <p>Organized by {event.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Events;
