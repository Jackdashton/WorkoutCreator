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
  const [initialData, setInitialData] = useState(null);
  
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
    setInitialData(null);
    setShowExerciseForm(true);
    // Handle create should only flip boolean - no jsx inside
  }

  function handleSubmitExercise(exercise) {

    if (initialData) {
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
    <div>
      <div>
        <h1>Workout Creator</h1>
      </div>
      <div>
        <ExerciseList 
        array={exerciseList} 
        onDelete={handleDelete}
        onClick={() => onEdit(exercise)}
        />

        <div className='buttonrow'> 
          <Button 
            value="Add Exercise"
            onClick={handleCreateClick}
            />
        </div>

        {showExerciseForm && (
          <AddExerciseForm 
          onSubmit={handleSubmitExercise}
          onCancel={handleCancel} 
          initialData={initialData} />) }
      </div>
    </div>
  ); 
}

export default App;