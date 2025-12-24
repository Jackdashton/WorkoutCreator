import { useState } from "react";

function AddExerciseForm() {

    const [name, setName] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [isWarmUp, setisWarmUp] = useState(false);

    const handleSubmit = () => {
        alert("connected");
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