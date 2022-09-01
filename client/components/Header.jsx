import React from 'react';
import Logo from '../assets/better-help-logo.png';

const Header = () => {
  return (
    <div id='header-container'>
      <div id='better-moment-container'>
        <img id='better-moment-logo' src={Logo} />
        <h1 id='better'>better</h1>
        <h1>moment</h1>
      </div>
      <div id="sign-in">sign in</div>
    </div>
  );
};

export default Header;
