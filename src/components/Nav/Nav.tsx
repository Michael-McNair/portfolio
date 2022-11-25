import React, { useState, useEffect } from 'react';
import './scss/Nav.css';

export default function Nav() {
  const [styles, setStyles] = useState({
    line1: {},
    line2: {},
    line3: {},
    collapse: {},
  });

  const handleMouseEnter = () => {
    setStyles((prevStyles: any) => {
      return {
        line1: {
          backgroundColor: 'transparent',
        },
        line2: { transform: 'translate(0, -50%) rotate(225deg)', top: '50%' },
        line3: { transform: 'translate(0, -50%) rotate(-225deg)', top: '50%' },
        collapse: { width: '160%', height: '170vh' },
      };
    });
  };

  const handleClick = () => {
    setStyles({
      line1: {},
      line2: {},
      line3: {},
      collapse: {},
    });
  };

  return (
    <nav>
      <h1>Michael McNair</h1>
      <ul>
        <li>
          <h4>About Me</h4>
        </li>
        <li>
          <h4>Skills</h4>
        </li>
        <li>
          <h4>Projects</h4>
        </li>
        <li>
          <h4>Experience</h4>
        </li>
        <li>
          <h4>Contact</h4>
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
            <h2>About Me</h2>
          </li>
          <li>
            <h2>Skills</h2>
          </li>
          <li>
            <h2>Projects</h2>
          </li>
          <li>
            <h2>Experience</h2>
          </li>
          <li>
            <h2>Contact</h2>
          </li>
        </ul>
      </div>
    </nav>
  );
}
