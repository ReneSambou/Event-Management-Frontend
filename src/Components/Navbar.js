import { Link } from 'react-router-dom';


const Navbar = () => {
    return (  
        <nav className="navbar">
            <Link to="Home"><h1>Muse</h1></Link>
            <div className="links">
            <a href="/create">My Events</a>
                <Link to="Login" style={{
                    color:"white",
                    backgroundColor: "#f1356d",
                    borderRadius: "16px"
                }}>Add Event</Link>              
            </div>
        </nav>

    );
}
 
export default Navbar;