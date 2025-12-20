function ExerciseList( { array, onDelete, onEdit } ) {

    return (
        // React must return just one element. 
        <>
            {array.map((exercise) => {
                return (
                    <div key={exercise.id}>
                        {exercise.name}
                        {/* Delete Button */}
                        <button onClick={() => onDelete(exercise.id)}>
                            Delete 
                        </button>
                        {/* Edit Button */}
                        <button onClick={() => {
                            const  newName = prompt(
                                "Edit Exercise Name:",
                                exercise.name
                            );
                            if (newName) {
                                onEdit(exercise.id, newName);
                            }
                        }}
                        > 
                            Edit 
                        </button>
                    </div>
                );
            })}
        </>
    );

}

export default ExerciseList;