import React from 'react';
import {Link, BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import All from './All';
import FullStackDeveloper from './FullStackDeveloper';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';
import './index.css';

function App() {

  const display = {
    padding : '20px',
    marginBottom: '20px',
    borderBottom : '5px solid grey',
    display : 'flex',
    justifyContent : 'Center',
  }

  const padding = {
padding : '5px 20px',
  }

  return (
    <Router >

    <div style={display}>
    <Link to='/All' style={padding}>All</Link>
      <Link to='/Fsd' style={padding}>Full Stack Development</Link>
      <Link to='/DS' style={padding}>Data Science</Link>
      <Link to='/CS' style={padding}>Cyber Security</Link>
      <Link to='/Career' style={padding}>Career</Link>
    </div>

    <Routes>
      <Route path="/All" element={<All/>}/>
      <Route path="/Fsd" element={<FullStackDeveloper/>}/>
      <Route path="/DS" element={<DataScience/>}/>
      <Route path="/CS" element={<CyberSecurity/>}/>
      <Route path="/Career" element={<Career/>}/>
    </Routes>
      
    </Router>
  )
}

export default App