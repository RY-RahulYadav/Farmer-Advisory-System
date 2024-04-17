import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home"
import "./styles/home.css"
import "./styles/section2.css"
import "./styles/section4.css"
import "./styles/section5.css"
import "./styles/section6.css"
import "./styles/footer.css"
import "./styles/about.css"
import "./styles/contact.css"
import "./styles/Ssection1.css"
import About from './components/about';
import Contact from './components/contact';



import Crop1 from './components/crop1';
import Crop2 from './components/crop2';
import Crop3 from './components/Crop3';

function App() {


  return (
    <>
      <Router>

        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/service/crop_recommend" element={<Crop1/>}/>
           <Route path="/service/crop_fire" element={<Crop2/>}/>
           <Route path="/service/crop_disease" element={<Crop3/>}/>
           <Route path="/contact" element={<Contact/>} />
          <Route path='*' element={<div style={{ height: '100vh' }}><h1 style={{ textAlign: 'center', position: 'relative', top: '40vh' }}>404 Page Not Found </h1></div>}> </Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
