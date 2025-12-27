import { useState } from "react";

function AddExerciseForm( {onSubmit}) {

    const [name, setName] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [isWarmUp, setisWarmUp] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); // stop page refresh
        
        const exercise = {
        // id generated in parent. 
        name,
        sets: Number(sets),
        reps: Number(reps),
        isWU: isWarmUp,
        };

        onSubmit(exercise); // Send to App.js

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input value={name} onChange={(e) => setName(e.target.value)}></input>
                </label>
                <label>
                    Sets: <input value={sets} onChange={(e) => setSets(e.target.value)}></input>
                </label>
                <label>
                    Reps: <input value={reps} onChange={(e) => setReps(e.target.value)}></input>
                </label>
                <label>
                    Warm Up Set?: <input type="checkbox" checked={isWarmUp} onChange={(e) => setisWarmUp(e.target.checked)}></input>
                </label>
                <button type="submit">Add Exercise</button>
            </form>
        </>
    );
}

export default AddExerciseForm;