import { useState } from "react";

function ExerciseForm( {onSubmit, onCancel, initialData}) {

    const [name, setName] = useState(initialData.name || "");
    const [sets, setSets] = useState(initialData.sets || "");
    const [reps, setReps] = useState(initialData.reps || "");
    const [isWarmUp, setisWarmUp] = useState( initialData.isWU || false);

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // stop page refresh

        const trimmedName = name.trim();
        const setsNum = Number(sets);
        const repsNum = Number(reps);

        // Validation
        if (!trimmedName) {
            setError("Exercise name is required.");
            return;
        } 
        if (trimmedName.length < 3 || trimmedName.length > 45) {
            setError("Name should be between 3 and 45 characters.");
            return;
        }

        // Sets Validation
        if (Number.isNaN(setsNum)) {
            setError("Must be a number.");
            return;
        }

        if (!Number.isInteger(setsNum)) {
            setError("Must be a whole number");
            return;
        }

        if (setsNum <= 0 || setsNum > 20) {
            setError("Sets must be between 1 and 20.");
            return;
        }

        // Reps Validation
        if (Number.isNaN(repsNum)) {
            setError("Must be a number.");
            return;
        }

        if (!Number.isInteger(repsNum)) {
            setError("Must be a whole number");
            return;
        }

        if (repsNum <= 0 || repsNum > 30) {
            setError("Reps must be between 1 and 30.");
            return;
        }

        // So error not blank if all okay. 
        setError("");
        
        const exercise = {
        // id generated in parent. 
        name: trimmedName,
        sets: setsNum,
        reps: repsNum,
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