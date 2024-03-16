import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from './Components/Events.js';
import Footer from './Components/Footer.js';
import EventNav from './Components/EventNav.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Pages/Home';
import Register from './Components/Register';
import AddEvent from './Components/AddEvent.js';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path='/login'
            element={
              <>
                <Navbar />
                <Login />
                <Footer />
              </>
            }
          />
          <Route
            path='/Event'
            element={
              <>
                <EventNav />
                <div className='content'>
                  <Events />
                </div>
              </>
            }
          />

          <Route
            path='/AddEvent'
            element={
              <>
                <EventNav />
                <div className='content'>
                  <AddEvent />
                </div>
              </>
            }
          />
          <Route
            path='/Login/Register/Login'
            element={
              <>
                <Navbar />
                <Login />
                <Footer />
              </>
            }
          />
          <Route
            path='/Login/Register'
            element={
              <>
                <Navbar />
                <Register />
                <Footer />
              </>
            }
          />
          <Route
            path='/Home/Register'
            element={
              <>
                <Navbar />
                <Register />
                <Footer />
              </>
            }
          />
          <Route
            path='/Home/Register/Login'
            element={
              <>
                <Navbar />
                <Register />
                <Footer />
              </>
            }
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
