import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from './Components/Events.js';
import Footer from './Components/Footer.js';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Pages/Home';
import Register from './Components/Register';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={
          <><Home /><Footer /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/Event" element={<Events />} />
          <Route path="/Login/Register/Login" element={<Login />} />
          <Route path="/Login/Register" element={<Register />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
