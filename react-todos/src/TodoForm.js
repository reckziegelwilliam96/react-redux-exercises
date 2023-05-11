import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions';

const TodoForm = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={e => setInput(e.target.value)} required />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
