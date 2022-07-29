import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Contact from './components/Pages/Conctact/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Homepage/Navbar/NavBar';
import Home from './components/Homepage/Home/Home';
import Common from './components/Homepage/Common/Common';
import About from './components/Pages/About/About';
import Footer from './components/Homepage/Footer/Footer';
import Notfound from './components/Pages/Notfound/Notfound';
import Services from './components/Pages/Services/Services';

function App() {
  return (
    <>
      {/* <Contact /> */}
      <>
      <BrowserRouter>
        
        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="services" element={<Services/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="*" element={<Notfound/>} />
          </Routes>
          <Footer/>
          </div>
      </BrowserRouter>
    </>
    </>
  );
}

export default App;
