import { ADD_TODO, REMOVE_TODO } from './actions';

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

export default todosReducer;
