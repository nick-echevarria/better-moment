import React from 'react';
import { Link } from 'react-router-dom';
import SurrenderFlow from './SurrenderFlow.jsx';

const Landing = () => {
  return (
    <div id='landing-container'>
      <span>Experiencing a tough moment?</span>
      <button id='landing-cta'>
        <Link to='/letitout' element={<SurrenderFlow />}>
          Surrender It
        </Link>
      </button>
    </div>
  );
};

export default Landing;
