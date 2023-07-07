import { TodoItem } from "./todoitems"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
            {todos.length === 0 && <h4>Let's Build <img src="public\escolher-picareta.png" alt="picareta" /></h4>}
            {todos.map(todo => {
                return (
                    <TodoItem
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </ul>
    )
}