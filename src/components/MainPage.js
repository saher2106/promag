import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './MainPage.css'; // Import the CSS file
import MainImage from "../assets/success.svg";

export default function MainPage() {
  let history = useHistory();
  const [getStartedClicked, setGetStartedClicked] = useState(false);

  const handleGetStartedClick = () => {
    setGetStartedClicked(true);
    history.push('/dashboard');
  };

  return (
    <div className="main-content">
      <div className="main-img">
        <img src={MainImage} alt="Main Image" />
      </div>
      <div className="main-text">
        <p className='header'>Manage your Projects easily with <p>ProTool.</p></p>
        <p className='sub-header'>Simplify project management with our platform. Effortlessly manage projects, collaborate with your team, track progress and stay organized all in one place. Experience productivity like never before.</p>
        {!getStartedClicked && <button className='btn-main' onClick={handleGetStartedClick}>Get Started</button>}
      </div>
    </div>
  );
}

