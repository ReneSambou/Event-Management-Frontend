import { Link } from 'react-router-dom';


const EventNav = () => {
    return (
        <nav className="event-nav">
            <h1>Muse Events</h1>
            <div className="event-nav-links">
                <Link to="/Event">My Events</Link>
                <Link to="/AddEvent" style={{
                    color: 'white', 
                    backgroundColor: '#257bec',
                    borderRadius:'8px'
                }}>New Event</Link>

            </div>
        </nav>
    )
}

export default EventNav;
