import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div class="nav-container">
          <nav id = 'navbar'>
            <div class="link-container ">
              <a href='#' class="nav-link">aboutUs</a>
            </div>
            <div class="link-container">
              <a href='#' class="nav-link">Products</a>
            </div>
            <div class="link-container">
              <a href='#' class="nav-link">some thing</a>
            </div>
            <div class="link-container">
              <a href='#' class="nav-link">Contact Us</a>
            </div>
          </nav>
        </div>
        <h1 className="head1">webDev club</h1>
        <h1 className="head2">of RVCE</h1>
        <Particles className="particles"
          params={{
                  "particles": {
                  "number": {
                  "value": 100
                  },
                  "size": {
                  "value": 3
                  }
                  },
                  "interactivity": {
                  "events": {
                  "onhover": {
                  "enable": false,
                  "mode": "repulse"

                  }
                  }
                  }
                  }
                }
            width= "auto"
            height="100vh"
          />
      </div>
      <div className='about'>
        <h1 className='abouthead'>aboutUs</h1>
      </div>
    </div>
  );
}

export default App;
