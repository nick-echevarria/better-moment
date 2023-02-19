import React, { useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import Header from './Header.jsx';
import Landing from './Landing.jsx';
import Dashboard from './Header.jsx';
import Footer from './Footer.jsx';
import SurrenderInput from './SurrenderInput.jsx';
import ReturnHabit from './HabitInput.jsx';

import '../scss/application.scss';

const App = () => { 
    return (
      <div id='app-container'>
        <Header />

        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/surrender/start' element={<SurrenderInput />} />
          <Route path='/return-habit' element={<ReturnHabit />} />
          {/* <Route exact path='/login' element={<Login />} /> */}
          <Route exact path='/' element={<Landing />} />
        </Routes>

        <Footer />
      </div>
    );
  };

export default App;
