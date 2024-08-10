import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../todoslice/createslice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <ul className="list-group">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'list-group-item-secondary' : ''}`}
          >
            <span
              className={`me-auto ${todo.completed ? 'text-decoration-line-through text-muted' : ''}`}
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{ cursor: 'pointer' }}
            >
              {todo.text}
            </span>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
