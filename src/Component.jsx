import './Component.css';

function Component({ name }) {
    return (
        <div>
            <p> { name } </p>
            <button>Delete</button>
            {/* now rendered in Exercise List component */}
        </div>
        
    );
}

export default Component;