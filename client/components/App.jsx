import React, { Component } from 'react';
import Header from './Header.jsx';
import Landing from './Landing.jsx';
import Footer from './Footer.jsx';

import '../scss/application.scss';

class App extends Component {
  state = { 
    signedIn: false,
    userSuggestions: {},
  };

  render() {
    return (
      <div id='app-container'>
        <Header />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
