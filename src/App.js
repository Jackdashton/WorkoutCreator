import './App.css';
import React from 'react';
import Component from './Component';
import Button from './Button';
import { useState } from 'react';
import ExerciseList from './ExerciseList';
import AddExerciseForm from './AddExerciseForm';

function App() {

  // State
  const [exerciseList, setExerciseList] = useState([{id:1, name:"Bench Press", sets:3, reps:8, isWU:false}, {id:2, name:"Back Squat", sets:3, reps:8, isWU:false}, {id:3, name:"Sumo Deadlift", sets:3, reps:8, isWU:true} ]);
  const [showAddExerciseForm, setShowAddExerciseForm] = useState(false);

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
    setShowAddExerciseForm(true);
    // Handle create should only flip boolean - no jsx inside
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

        {showAddExerciseForm ? <AddExerciseForm /> : null}

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