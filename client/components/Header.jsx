import React from 'react';
import Logo from '../assets/better-help-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id='header-container'>
      <div id='better-moment-container'>
        <img id='better-moment-logo' src={Logo} />
        <h1 id='better'>better</h1>
        <h1>moment</h1>
      </div>
      <div id='sign-in'>
        <Link to='/login'>sign in</Link>
      </div>
    </div>
  );
};

export default Header;
