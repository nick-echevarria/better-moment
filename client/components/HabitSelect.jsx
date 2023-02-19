import React, { useState, useEffect, useLocation } from 'react';

const HabitSelect = () => {
  const location = useLocation();
  const [habitList, setHabitList] = useState();
  const [selectedHabit, setSelectedHabit] = useState('');

  useEffect(async () => {
    if (!location.state) {
      const savedUserHabits = await getHabits();
      setHabitList(savedUserHabits);
    } else setHabitList(location.state);
    
    startHabitSelect();
  }, []);

  const startHabitSelect = () => {
    const selectedHabit = startRandomizerAnimation();
    setSelectedHabit(selectedHabit);
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
