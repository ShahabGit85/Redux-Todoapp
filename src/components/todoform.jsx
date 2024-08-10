import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../todoslice/createslice';


const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" mt-4">
      <div className="row justify-content-center ">
        <div className="col-md-8 col-lg-6 d-flex ">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a todo"
            className="form-control me-2"
          />
          <button type="submit" className="btn btn-primary px-4">
            Add 
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
