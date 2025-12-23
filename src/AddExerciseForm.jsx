function AddExerciseForm() {
    return (
        <>
            <label>
                Name: <input name="exerciseName"></input>
            </label>
            <label>
                Sets: <input name="exerciseSets"></input>
            </label>
            <label>
                Reps: <input name="exerciseReps"></input>
            </label>
            <label>
                Warm Up Set?: <input type="checkbox" name="isWarmUp"></input>
            </label>
        </>
    );
}

export default AddExerciseForm;