import './ExerciseList.css';

function ExerciseList( { array, onDelete, onEdit, onMove } ) {

    return (
        // React must return just one element. 
        <div className='exerciselist'>
            {array.map((exercise) => {
                return (
                    <div className='exerciseitem' key={exercise.id}>
                        <div className='exerciseinfo'>
                            {exercise.name + "-"}
                            {"   Sets: " + exercise.sets}
                            {"   Reps: " + exercise.reps}
                        </div>
                        {/* Edit Button */}
                        <button className='button' onClick={() => onEdit(exercise)}>
                            Edit
                        </button>
                        {/* Delete Button */}
                        <button className='button' onClick={() => onDelete(exercise.id)}>
                            Delete 
                        </button>
                        <button className='button' onClick={() => onMove(exercise.id, "up")}>
                            ↑
                        </button>
                        <button className='button' onClick={() => onMove(exercise.id, "down")}>
                            ↓
                        </button>
                    </div>
                );
            })}
        </div>
    );

}

export default ExerciseList;