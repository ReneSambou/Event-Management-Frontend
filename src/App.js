import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
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
          <>
          <Home /> 
          </>} />
          <Route path="/login" element={<Login />} />
          <Route path="/Login/Register/Login" element={<Login />} />
          <Route path="/Login/Register" element={<Register />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
