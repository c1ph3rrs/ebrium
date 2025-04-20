import './App.css'
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MOB from './Components/MOB/MOB';
import AIML from './Components/AIML/AIML';
import Contact from './Components/Contact/Contact';
import Web from './Components/Web/Web';
import Cloud from './Components/CS/Cloud';
import Solutions from './Components/Solutions/Solutions';

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
      </Routes>  
    </Router>
  )
}

export default App
