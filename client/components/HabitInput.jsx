import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const defaultHabitFormFields = {
  habitOne: '',
  habitTwo: '',
  habitThree: '',
};

const HabitInput = () => {
  const navigate = useNavigate();
  const [habitFormFields, setHabitFormFields] = useState(
    defaultHabitFormFields
  );
  const { habitOne, habitTwo, habitThree } = habitFormFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setHabitFormFields({ ...habitFormFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/habit-select', { state: habitFormFields });
  };

  return (
    <>
      <h2>
        You've let go of some emotions. Science says following this up with an
        action that brings some positivity to your life is a great way to
        establish good habits to use in times like this. Let us select one of
        the three above for you!
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          name='habitOne'
          type='habitOne'
          value={habitOne}
          onChange={handleChange}
        ></input>
        <input
          name='habitTwo'
          type='habitTwo'
          value={habitTwo}
          onChange={handleChange}
        ></input>
        <input
          name='habitThree'
          type='habitThree'
          value={habitThree}
          onChange={handleChange}
        ></input>
        <button type='submit'>So, Which One Will It Be?</button>
      </form>
    </>
  );
};

export default HabitInput;
