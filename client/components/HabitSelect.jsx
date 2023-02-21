import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HabitSelect = () => {
  const location = useLocation();
  const [habitList, setHabitList] = useState([]);
  const [selectedHabit, setSelectedHabit] = useState([]);

  useEffect(() => {
    selectHabit();
  }, []);

  const selectHabit = () => {
    if (location.state) {
      const localHabitList = location.state;
      const localSelectedHabit =
        localHabitList[
          Math.floor(Math.random() * (localHabitList.length - 1 - 0 + 1) + 0)
        ];
      setSelectedHabit(localSelectedHabit);
    } else return;
  };

  return (
    <div>
      {selectedHabit ? (
        <h2>{selectedHabit}</h2>
      ) : (
        <h2>Nothing selected yet!</h2>
      )}
    </div>
  );
};

export default HabitSelect;
