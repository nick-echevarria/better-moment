import React, { Component } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './Header.jsx';
import Landing from './Landing.jsx';
import Dashboard from './Dashboard.jsx';
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

        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route exact path='/' element={<Landing />} />
        </Routes>

        <Footer />
      </div>
    );
  }
}

export default App;
