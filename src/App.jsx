import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs';
import Tours from './pages/Tours';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';

function App() {

  const location = useLocation();

  return (
    <>

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours/>} />
        <Route path="/contact_us" element={<ContactUs/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

    </>
  )
}

export default App
