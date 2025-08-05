import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <>
      <h2 style={{ marginLeft: "30px" }}>Child Component</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}

            {!todo.completed && (
              <button onClick={() => handleComplete(todo.id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
