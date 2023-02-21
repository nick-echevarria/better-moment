import React from 'react';
import { Link } from 'react-router-dom';
import SurrenderInput from './SurrenderInput.jsx';

const Landing = () => {
  return (
    <div id='landing-container'>
      <span>Experiencing tough emotions?</span>
      <button id='landing-cta'>
        <Link to='/surrender' element={<SurrenderInput />}>
          Let Them Go!
        </Link>
      </button>
    </div>
  );
};

export default Landing;
