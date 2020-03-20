import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
function App() {
  return (
    <div className="App">
      <div className="App-header" id="home">
        <div class="nav-container">
          <nav id = 'navbar'>
            <div class="link-container ">
              <a href='#home' class="nav-link">Top</a>
            </div>
            <div class="link-container ">
              <a href='#ab' class="nav-link">aboutUs</a>
            </div>
            <div class="link-container">
              <a href='#prod' class="nav-link">Products</a>
            </div>
            <div class="link-container">
              <a href='#events' class="nav-link">Upcoming Events</a>
            </div>
            <div class="link-container">
              <a href='#contact' class="nav-link">Contact Us</a>
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
      <div className='about' id="ab">
      <h1 className='producthead'>aboutUs</h1>
      </div>
      <div className='products' id="prod">
        <h1 className='producthead' id='about-us'>Showcase</h1>
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
                  <img src="" height='12' width='12' alt="Slide 1"/>
                  <div class="carousel-caption">
                      <h1>Projects going on in the club</h1>
                      <p class="lead"  >
                        <p><big>1)Multicropping factor prediction</big></p><br/> 
                        <p><big>2)Teacher review system</big></p><br/>
                        <p><big>3)E-Commerce Website</big></p><br/>
                        <p><big>4)App Development using React-native</big></p><br/>
                      </p>
                      <a href="https://forms.gle/DQaNbmHbypY9q4gy9" class="btn btn-lg btn-primary">Click here to enroll</a>
                  </div>
              </div>
              <div class="item" id="slide2">
                <img src="https://designshack.net/wp-content/uploads/placeholder-image.png" alt="Slide 2"/>
                  <div class="carousel-caption">
                      <h1>Best rated/Recomended Web development certification courses</h1>
                      <p class="lead">
                        <p><big>1)Complete React Developer in 2020-Zero to Mastery <a href="https://www.udemy.com/share/101WH4/">Learn More</a></big></p><br/>
                        <p><big>2)The Complete react developer course <a href="https://www.udemy.com/share/101XgI/">Learn More</a></big></p><br/>
                        <p><big>3)The Complete web developer in 2020-Zero to Mastery <a href="https://www.udemy.com/share/101WcU/">Learn More</a></big></p><br/>  
                      </p>
                      {/* <a href="#" class="btn btn-lg btn-primary">Learn More</a> */}
                  </div>
              </div>
              <div class="item" id="slide3">
                  <img src="https://designshack.net/wp-content/uploads/placeholder-image.png" alt="Slide 3"/>
                  <div class="carousel-caption">
                      <h1>Name and Fame</h1>
                      <p class="lead">
                        <li><big>Affilated to AICTE,New Delhi and Accredited by NBA</big></li><br/>
                        <li><big>One of the trending techincal clubs in Bengaluru</big></li><br/>
                        <li><big>Path from Zero to Mastery in Web development</big></li><br/>
                      </p>
                      {/* <a href="#" class="btn btn-lg btn-primary">Learn More</a> */}
                  </div>
              </div>
              <div class="item" id="slide4">
                 <img src="http://placehold.it/1920x720&amp;text=Slide+4" alt="Slide 4"/>
                 <div class="carousel-caption">
                     <h1>Upcoming events</h1>
                     <p class="lead">
                       <p><li><big>Reactor's hunt: Solve coding quetions to hunt for treasure(Coming soon!!)</big></li></p><br/>
                       <p><li><big>Web-Dev hackathon: Team up to 4 students</big></li></p><br/>
                       <p><li><big>Nerds V/S CrazyMinds: Hunt for core teammembership</big></li></p><br/>
                     </p>
                     {/* <button type="button" href="#" class="btn btn-lg btn-primary">Learn More</button> */}
                 </div>
             </div>
          </div>
        </div>     
      </div>
      </div>
      <div id="events">
        <h1> Upcoming events</h1>
      </div>
      <div id="contact">
        <h1>Contact Us</h1>
      </div>
    </div>
  );
}

export default App;
