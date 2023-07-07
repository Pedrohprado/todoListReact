export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                <p> {title}</p>
               
            </label>
            <button
                onClick={() => deleteTodo(id)}
                className="btn-danger"
            >
                <img src="public\bin.png" alt="delete to do" />
            </button>
        </li>
    )
}