function ExerciseList( { array, onDelete, onEdit, onMove } ) {

    return (
        // React must return just one element. 
        <>
            {array.map((exercise) => {
                return (
                    <div key={exercise.id}>
                        {exercise.name + "-"}
                        {"   Sets: " + exercise.sets}
                        {"   Reps: " + exercise.reps}
                        {/* Edit Button */}
                        <button onClick={() => onEdit(exercise)}>
                            Edit
                        </button>
                        {/* Delete Button */}
                        <button onClick={() => onDelete(exercise.id)}>
                            Delete 
                        </button>
                        <button onClick={() => onMove(exercise.id, "up")}>
                            Up
                        </button>
                        <button onClick={() => onMove(exercise.id, "down")}>
                            Down
                        </button>
                    </div>
                );
            })}
        </>
    );

}

export default ExerciseList;