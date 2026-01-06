import { useState } from "react";

function ExerciseForm( {onSubmit, onCancel, initialData}) {

    const [name, setName] = useState(initialData.name || "");
    const [sets, setSets] = useState(initialData.sets || "");
    const [reps, setReps] = useState(initialData.reps || "");
    const [isWarmUp, setisWarmUp] = useState( initialData.isWU || false);

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // stop page refresh

        // Validation
        if (!name.trim()) {
            setError("Exercise name is required.");
            return;
        }

        if (Number(sets) <= 0 || Number(reps) <= 0) {
            setError("Sets and Reps must be greater than 0.");
            return;
        }

        // So error not blank if all okay. 
        setError("");
        
        const exercise = {
        // id generated in parent. 
        name,
        sets: Number(sets),
        reps: Number(reps),
        isWU: isWarmUp,
        };

        onSubmit(exercise); // Send to App.js

    }

    const handleCancel = () => {
        onCancel();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {error && <p>{error}</p>}
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
                <button type="button" onClick={handleCancel}>Cancel</button>
            </form>
        </>
    );
}

export default ExerciseForm;