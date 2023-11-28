import './App.css';
import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
    
      <Home />
      <About/>
      <Work/>
      <Testimonials/>
      <Contact/>
      <Navbar/>
    </div>
  );
}

export default App;
