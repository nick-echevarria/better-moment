import React from 'react';
import { useNavigate } from 'react-router-dom';

const SurrenderInput = () => {
  const navigate = useNavigate();

  const submitSurrender = () => {
    navigate('/return-habit');
  };

  return (
    <div id='surrender-container'>
      <textarea
        id='surrender-input'
        placeholder="What's on your mind? Be as candid as you want -- we do not save any of your input."
      ></textarea>
      <button onClick={submitSurrender}>Let Your Emotions Go</button>
    </div>
  );
};

export default SurrenderInput;
