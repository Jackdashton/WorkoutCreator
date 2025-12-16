import './App.css';
import React from 'react';
import Component from './Component';
import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <h1>Workout Creator</h1>
      </div>
      <div>
        <ol>
          <Component name="Bench Press" />
          <Component name="Back Squat" />
          <Component name="Deadlift" />
        </ol>
        <div className='buttonrow'> 
          <Button value="Add Exercise"/>
          <Button value="Remove Exercise"/>
          <Button value="Edit Exercise"/>
        </div>
        {/* Reorder function with Drag and Drop */}
        {/* Light blue for warm up, darker blue for Normal Sets */}
        {/* Different Days, save particular Exericses?  */}
        {/* state for is warm up or is strength training - queue logo depending */}
        {/* Red for cardio? */}
      </div>
    </div>
  )
}

export default App;
