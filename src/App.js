import './App.css';
import React from 'react';
import Component from './Component';
import Button from './Button';
import { useState } from 'react';
import ExerciseList from './ExerciseList';
import AddExerciseForm from './AddExerciseForm';
import { v4 as uuid } from 'uuid';

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

  function handleCreateClick() {
    setShowAddExerciseForm(true);
    // Handle create should only flip boolean - no jsx inside
  }

  function handleAddExercise(exercise) {

    // const newID = uuid();
    const newID = Math.max(...exerciseList.map(e => e.id)) + 1; // this isn't good - error prone - redo 

    setExerciseList([...exerciseList, {...exercise, id:newID}]);

    setShowAddExerciseForm(false);
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
            onClick={handleCreateClick}
            />
        </div>
        {showAddExerciseForm ? <AddExerciseForm onSubmit={handleAddExercise} /> : null}
      </div>
    </div>
  ); 
}

export default App;