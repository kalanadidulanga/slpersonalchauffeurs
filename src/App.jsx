import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {

  const location = useLocation();

  return (
    <>

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
      </Routes>

    </>
  )
}

export default App
