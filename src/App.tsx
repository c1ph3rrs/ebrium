import './App.css'
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MOB from './Components/MOB/MOB';
import BI from './Components/BI/BI';
import AIML from './Components/AIML/AIML';
import Contact from './Components/Contact/Contact';
import Web from './Components/Web/Web';
import Cloud from './Components/CS/Cloud';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mob" element={<MOB />} />
        <Route path="/web" element={<Web />} />
        <Route path="/ai" element={<AIML />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/bi" element={<BI />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>  
    </Router>
  )
}

export default App
