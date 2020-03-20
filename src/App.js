import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import oc from './oc.jpeg';
import i2 from './i2.jpg';
import fb from './fb.jpeg';
import twt from './twt.jpeg';
import insta from './insta.png';
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
      <p className="intro">We are the official Web Development club of RVCE ...!</p>
      <p className="body">
        The purpose of the Web Development Club is:<br/>
        <li>To promote learning and professional growth in the field of web development.</li>
        <li>To establish a network of like-minded individuals who want to pursue web development</li>
        <li>To give back to the RVCE and local community by offering web development services to students, faculty, and clubs and organizations.</li>
        <li>To give students exposure in the world of open source</li>
      </p>
      <br/>
      <br/>
      <p className="abody">
        
      </p>
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
                  <img src={oc} height='12' width='12' alt="Slide 1"/>
                  <div class="carousel-caption">
                      <h1 class="c1">
                        Several of our members have been leads in huge open source projects
                      </h1>

                      <a href="https://forms.gle/DQaNbmHbypY9q4gy9" class="btn btn-lg btn-primary">Click here to enroll</a>
                  </div>
              </div>
              <div class="item" id="slide3">
                  <img src={i2} alt="Slide 3"/>
                  <div class="carousel-caption">
                      <h1 className="c4">Name and Fame</h1>
                      <p class="lead3">
                        <li><big>Affilated to AICTE,New Delhi and Accredited by NBA</big></li><br/>
                        <li><big>One of the trending techincal clubs in Bengaluru</big></li><br/>
                        <li><big>Path from Zero to Mastery in Web development</big></li><br/>
                      </p>
                      {/* <a href="#" class="btn btn-lg btn-primary">Learn More</a> */}
                  </div>
              </div>
              <div class="item" id="slide4">
                 <img src={i2} alt="Slide 4"/>
                 <div class="carousel-caption">
                     <h1 className="c4">Completed Projects</h1>
                     <p class="lead4">
                       <p><li>Automated ship monitoring</li></p>
                       <p><li>E-Commerce Website</li></p>
                       <p><li>Teacher review system</li></p>
                       <p><li>Tic Tac toe with AI</li></p>
                     </p>
                     {/* <button type="button" href="#" class="btn btn-lg btn-primary">Learn More</button> */}
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
          </div>
        </div>     
      </div>
      </div>
      <div id="events">
        <h1 id="eventhead"> Upcoming events</h1>
        <div className="cont">
        <div className="upc">
        <h1 className="up">REACTor Sherlock/ REACTor XYZ</h1>
        <p className="updef"> This event is planned to be conducted next month 
        emphasizing COVID-19 spread.  It is conducted in association with the 
        Ministry of Health and Family Welfare, Government of India. It is a stage 
        set up to showoff patriotism along with talent in react-js along with node-js
        (or any other) in the backend. Students are required to develop a website to 
        create an impact of prevention and protection in the minds of citizens. Any kind
         of design using react-js supporting the COVID-19 cause is accepted. The entry
          fee is 250INR per team and the team may consist of up to 4 individuals. The 
          winners may get Govt. internships.
        </p>
        </div>
        <div className="upc">
        <h1 className="up">WebDevoShip</h1>
        <p className="updef"> It is a contest that will be conducted for 2 days(48 hours)
         wherein the participants will be given a theme on which they have to come with a
          web app solution. You can team up to a maximum of 4. The top three teams will be
           awarded WebDevoShip from the club side and will be included in upcoming projects
        </p>
        </div>
        <div className="upc">
        <h1 className="up">DevOthon</h1>
        <p className="updef"> This contest is conducted by the club in association with
         Jaya Prakasha Murugan and Associates. It is a bottom-up approach contest. 
         Participants should submit their idea irrespective of their domain. The 
         selected students will be participating in the hackathon conducted by the 
         company. Winners and runners will be offered internships from the company.The 
         dates will be intimated soon!.
        </p>
        </div>
        </div>
      </div>
<div id="contact">
        <h1>Contact Us</h1>
      <div className="bt2">
      <p><big>club-email-id:webdevclub@rvce.edu.in</big></p>
      <p><big>Nachiket-email:nachiketgk.cs18@rvce.edu.in</big></p>
      <p><big>Shreyash-email: shreyashgupta.cs18@rvce.edu.in</big></p>
      </div>
      <div className='bottom-bar'>
      <p><big>Follow us on social media: </big></p>
      <a href="https://www.facebook.com/"><img src={fb} height="32" width="32"/>        </a>
      <a href="https://www.instagram.com/"><img src={insta} height="32" width="32"/>        </a>
      <a href="https://www.twitter.com/"><img src={twt} height="32" width="32"/>        </a>
      </div>
      </div>
    </div>
  );
}

export default App;
