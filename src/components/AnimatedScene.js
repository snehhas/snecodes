// AnimatedScene.js

import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './App.css'; // Import your CSS file

const AnimatedScene = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Your existing JavaScript code here

    return () => {
      // Clean up any resources or event listeners if needed
    };
  }, []);

  return (
    <div>
      {/* Your existing HTML content here */}
    </div>
  );
};

export default AnimatedScene;
