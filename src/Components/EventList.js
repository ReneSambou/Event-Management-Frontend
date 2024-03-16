const EventList = (props) => {
    const  events = props.events || []
    return (
        <div className="event-list">
            {events.map((event) =>(
        <div className="event-preview" key={event.id}>
           <h2>{event.title}</h2>
           <p>
        Orgnised by: {event.organiser}<br/>
           Location: {event.location}<br/>
           Date: {event.date}<br/>
           Time: {event.time}</p>
        </div>
      ))}
        </div>
    )
        
    
}

export default EventList