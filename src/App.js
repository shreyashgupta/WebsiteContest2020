import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Carousel from 'react-bootstrap/Carousel';
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
      </div>
      <div className='products'>
        <h1 className='producthead'>aboutUs</h1>
      <div id="jumboCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators hidden-xs">
            <li data-target="#jumboCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#jumboCarousel" data-slide-to="1"></li>
            <li data-target="#jumboCarousel" data-slide-to="2"></li>
            <li data-target="#jumboCarousel" data-slide-to="3"></li>
        </ol>

        <div class="container">
          <div class="carousel-inner" role="listbox">
              <div class="item active" id="slide1">
                  <img src="http://lorempixel.com/g/900/300/sports/1/" alt="Slide 1"/>
                  <div class="carousel-caption">
                      <h1>Check Out this Moose</h1>
                      <p class="lead">This text is super engaging and makes you want to click the button.</p>
                      <a href="#" class="btn btn-lg btn-primary">Learn More</a>
                  </div>
              </div>
              <div class="item" id="slide2">
                <img src="https://designshack.net/wp-content/uploads/placeholder-image.png" alt="Slide 2"/>
                  <div class="carousel-caption">
                      <h1>#Slide Title</h1>
                      <p class="lead">This text is super engaging and makes you want to click the button.</p>
                      <a href="#" class="btn btn-lg btn-primary">Learn More</a>
                  </div>
              </div>
              <div class="item" id="slide3">
                  <img src="https://designshack.net/wp-content/uploads/placeholder-image.png" alt="Slide 3"/>
                  <div class="carousel-caption">
                      <h1>#Slide Title</h1>
                      <p class="lead">This text is super engaging and makes you want to click the button.</p>
                      <a href="#" class="btn btn-lg btn-primary">Learn More</a>
                  </div>
              </div>
              <div class="item" id="slide4">
                 <img src="http://placehold.it/1920x720&amp;text=Slide+4" alt="Slide 4"/>
                 <div class="carousel-caption">
                     <h1>#Slide Title</h1>
                     <p class="lead">This text is super engaging and makes you want to click the button.</p>
                     <button type="button" href="#" class="btn btn-lg btn-primary">Learn More</button>
                 </div>
             </div>
          </div>
        </div>     
      </div>
      </div>

    </div>
  );
}

export default App;
