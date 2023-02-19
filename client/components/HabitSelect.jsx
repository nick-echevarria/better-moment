import React, { useState, useEffect } from 'react';

const HabitSelect = ({ habits }) => {
  const [selectedHabit, setSelectedHabit] = useState("");

  useEffect(() => { 
    if (!habits) getHabits()
    startHabitSelect();
  }, [])

  const startHabitSelect = () => { 
    const selectedHabit = startRandomizerAnimation(); 
    setSelectedHabit(selectedHabit);
  }

  return (
    <div>
      {selectedHabit ? <h2>{selectedHabit}</h2> :  <h2>Nothing selected yet!</h2>}
    </div>
  );
}

export default HabitSelect;
