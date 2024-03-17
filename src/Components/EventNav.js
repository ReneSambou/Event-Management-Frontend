import { Link } from 'react-router-dom';


const EventNav = () => {
    return (
        <nav className="event-nav">
            <Link to="/"><h1>Muse</h1></Link>
            <div className="event-nav-links">
            <Link to="/Event">Events</Link>
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
