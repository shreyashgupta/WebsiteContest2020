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
              <a href='#' class="nav-link">Home</a>
            </div>
            <div class="link-container">
              <a href='#' class="nav-link">FAQ</a>
            </div>
            <div class="link-container">
              <a href='#' class="nav-link">List a Coin</a>
            </div>
            <div class="link-container">
              <a href='#' class="nav-link">Contact Us</a>
            </div>
          </nav>
        </div>
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
      <div>
        <p>this is mid</p>
      </div>
    </div>
  );
}

export default App;
