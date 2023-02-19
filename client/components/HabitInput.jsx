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
  const { habitOne, habitTwo, habitThree } = defaultHabitFormFields;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setHabitFormFields({ ...defaultHabitFormFields, [name]: value });
  };

  const submitHabits = () => {};

  return (
    <>
      <input
        name='habitOne'
        type='text'
        value={habitOne}
        onChange={handleChange}
      ></input>
      <input
        name='habitTwo'
        type='text'
        value={habitTwo}
        onChange={handleChange}
      ></input>
      <input
        name='habitThree'
        type='text'
        value={habitThree}
        onChange={handleChange}
      ></input>
      <h2>
        You've let go of some emotions. Science says following this up with an
        action that brings some positivity to your life is a great way to
        establish good habits to use in times like this. Let us select one of
        the three above for you!
      </h2>
      <button onClick={submitHabits}>So, Which One Will It Be?</button>
      {/* Necessary to redirect with inputs  */}
    </>
  );
};

export default HabitInput;
