import './App.css';
import React from 'react';
import Component from './Component';
import Button from './Button';
import { useState } from 'react';
import ExerciseList from './ExerciseList';

function App() {

  // State
  const [exerciseList, setExerciseList] = useState([{id:1, name:"Bench Press"}, {id:2, name:"Back Squat"}, {id:3, name:"Sumo Deadlift"} ]);

  // Helper Functions
  function handleDelete(id) {
    const newExerciseList = exerciseList.filter(
      (exercise) => exercise.id !== id
    );
    setExerciseList(newExerciseList);
  }

  function handleEdit(id, newName) {

    const newExerciseList = exerciseList.map((exercise) => {

      if (id === exercise.id) {
        return {
          ...exercise,
          name: newName,
        }
      } else {
        return exercise;
      }
    });
    setExerciseList(newExerciseList); 
  };

  function handleCreate() {
    const newName = prompt("What is the name of your new Exercise?");
    if (!newName) return; // cancel or empty

    const newID = Math.max(...exerciseList.map(e => e.id)) + 1;
    const newExercise = { id: newID, name: newName };

    setExerciseList([...exerciseList, newExercise]);
  }

  return (
    <div>
      <div>
        <h1>Workout Creator</h1>
      </div>
      <div>
        <ExerciseList 
        array={exerciseList} 
        onDelete={handleDelete}
        onEdit={handleEdit} 
        />

        <div className='buttonrow'> 
          <Button 
            value="Add Exercise"
            onClick={handleCreate}
            />
        </div>
      </div>
    </div>
  ); 
}

export default App;