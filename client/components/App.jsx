import React, { Component } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './Header.jsx';
import Landing from './Landing.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';
import SurrenderFlow from './SurrenderFlow.jsx';

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

        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/letitout' element={<SurrenderFlow />} />
          {/* <Route exact path='/login' element={<Login />} /> */}
          <Route exact path='/' element={<Landing />} />
        </Routes>

        <Footer />
      </div>
    );
  }
}

export default App;
