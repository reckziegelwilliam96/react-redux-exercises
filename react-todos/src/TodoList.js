import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from './actions';

const TodoList = () => {
  const todos = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => dispatch(removeTodo(index))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
