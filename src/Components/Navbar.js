import { Link } from 'react-router-dom';


const Navbar = () => {
    return (  
        <nav className="navbar">
            <Link to="/"><h1>Muse</h1></Link>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/Testimonial">Testimonials</Link>
            <Link to="/Contact">Contact</Link>
                <Link to="Login" style={{
                    color:"white",
                    backgroundColor: "#257bec",
                    borderRadius: "16px"
                }}>Dashboard</Link>              
            </div>
        </nav>

    );
}
 
export default Navbar;