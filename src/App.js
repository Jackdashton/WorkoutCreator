import './App.css';
import React from 'react';
import Component from './Component';
import Button from './Button';
import { useState } from 'react';
import ExerciseList from './ExerciseList';
import AddExerciseForm from './AddExerciseForm';
import ExerciseForm from './ExerciseForm';
import { v4 as uuid } from 'uuid';

function App() {

  // State
  const [exerciseList, setExerciseList] = useState([{id:1, name:"Bench Press", sets:3, reps:8, isWU:false}, {id:2, name:"Back Squat", sets:3, reps:8, isWU:false}, {id:3, name:"Sumo Deadlift", sets:3, reps:8, isWU:true} ]);
  const [showExerciseForm, setShowExerciseForm] = useState(false);
  const [initialData, setInitialData] = useState({});
  
  // Helper Functions
  function handleDelete(id) {
    const newExerciseList = exerciseList.filter(
      (exercise) => exercise.id !== id
    );
    setExerciseList(newExerciseList);
  }

  function handleEditClick(exercise) {
    setInitialData(exercise);
    setShowExerciseForm(true);

  };

  function handleCreateClick() {
    setInitialData({});
    setShowExerciseForm(true);
    // Handle create should only flip boolean - no jsx inside
  }

  function handleMove(id, direction) {

    const newOrderedList = [...exerciseList];

    const index = newOrderedList.findIndex(e => e.id === id);
    if (index === -1) return;

    if (direction === "up" && index > 0) {
      [newOrderedList[index - 1], newOrderedList[index]] =
        [newOrderedList[index], newOrderedList[index - 1]];
    }

    if (direction === "down" && index < newOrderedList.length - 1) {
      [newOrderedList[index + 1], newOrderedList[index]] =
        [newOrderedList[index], newOrderedList[index + 1]];
    }

    setExerciseList(newOrderedList);

  }

  function handleSubmitExercise(exercise) {

    if (initialData?.id) {
      const updatedList = exerciseList.map((item) =>
        item.id === initialData.id ? {...exercise, id: initialData.id} : item
      );

    setExerciseList(updatedList);
    
    } else {
      setExerciseList([...exerciseList, {...exercise, id: uuid() }]);
    }

    setShowExerciseForm(false);
    setInitialData(null);
  };

  function handleCancel() {
    setShowExerciseForm(false);
  };

  return (
    <div className='app'>
      <div className='appheader'>
        <h1>Workout Creator</h1>
      </div>
      <div className='appbody'>
        <ExerciseList 
        array={exerciseList} 
        onDelete={handleDelete}
        onEdit={handleEditClick}
        onMove={handleMove}
        />

        <div className='buttonrow'> 
          <Button 
            value="Add Exercise"
            onClick={handleCreateClick}
            />
        </div>

        {showExerciseForm && (
          <ExerciseForm 
          onSubmit={handleSubmitExercise}
          onCancel={handleCancel} 
          initialData={initialData} />) }
      </div>
    </div>
  ); 
}

export default App;
