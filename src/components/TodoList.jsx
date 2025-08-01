import React from 'react'

const TodoList = ({todos, handleComplete}) => {

  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li key={todo.id} style={{ marginBottom: "10px" }}>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginRight: "10px",
            }}
          >
            {todo.text}
          </span>
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  )
}

export default TodoList