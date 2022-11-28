import React, { useState, useEffect } from 'react';
import './scss/Nav.css';

export default function Nav() {
  const collapseHiddenStyles = {
    line1: {},
    line2: {},
    line3: {},
    collapse: {},
    nav: {},
  };

  const collapseShownStyles = {
    line1: {
      backgroundColor: 'transparent',
    },
    line2: { transform: 'translate(0, -50%) rotate(225deg)', top: '50%' },
    line3: { transform: 'translate(0, -50%) rotate(-225deg)', top: '50%' },
    collapse: { width: '160%', height: '170vh' },
    nav: { position: 'fixed' },
  };

  const [styles, setStyles] = useState(collapseHiddenStyles);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820) {
        setStyles(collapseHiddenStyles);
      }
    };
    window.addEventListener('resize', handleResize);
    return function cleanupListener() {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    setStyles(collapseShownStyles);
  };

  const handleClick = () => {
    setStyles(collapseHiddenStyles);
  };

  return (
    <nav style={styles.nav}>
      <h1>Michael McNair</h1>
      <ul>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div
        className="hamburger"
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        <div className="line" style={styles.line1}></div>
        <div className="line" style={styles.line2}></div>
        <div className="line" style={styles.line3}></div>
      </div>
      <div className="collapse" style={styles.collapse}>
        <ul>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
