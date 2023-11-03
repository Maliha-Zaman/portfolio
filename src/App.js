import React from 'react';
import './App.css';
//import profilePic from './profile.jpg'; // Import your profile picture

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="profile">
            <div className="profile-details">
              <h2>Maliha Zaman</h2>
              <p>
                Hello! I'm a passionate web developer with expertise in React.js and front-end technologies.
                I love creating interactive and responsive web applications. Let's build something amazing together!
              </p>
              <div className="buttons">
                <button>View Profile</button>
                <a href="/path/to/your/cv.pdf" download><button>Download CV</button></a>
              </div>
            </div>
            {/* <img src={profilePic} alt="Profile" /> */}
          </div>
        </div>
      </header>
      {/* Rest of your content goes here */}
    </div>
  );
};

export default App;
