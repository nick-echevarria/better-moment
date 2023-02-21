import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Header from './Header.jsx';
import Landing from './Landing.jsx';
import Dashboard from './Header.jsx';
import Footer from './Footer.jsx';
import SurrenderInput from './SurrenderInput.jsx';
import HabitInput from './HabitInput.jsx';
import HabitSelect from './HabitSelect.jsx';

import '../scss/application.scss';

const App = () => {
  return (
    <div id='app-container'>
      <Header />

      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/surrender' element={<SurrenderInput />} />
        <Route path='/habit-input' element={<HabitInput />} />
        <Route path='/habit-select' element={<HabitSelect />} />
        {/* <Route exact path='/login' element={<Login />} /> */}
        <Route exact path='/' element={<Landing />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
