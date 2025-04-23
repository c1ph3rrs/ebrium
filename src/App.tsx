import './App.css'
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MOB from './Components/MOB/MOB';
import AIML from './Components/AIML/AIML';
import Web from './Components/Web/Web';
import Cloud from './Components/CS/Cloud';
import Solutions from './Components/Solutions/Solutions';
import About from './Components/About/AboutUs';
import Contact from './Components/Contact/Contact';
import Consultation from './Components/Consultation/Consultation';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mob" element={<MOB />} />
        <Route path="/web" element={<Web />} />
        <Route path="/AIML" element={<AIML />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consultation" element={<Consultation />} />
      </Routes>  
    </Router>
  )
}

export default App
