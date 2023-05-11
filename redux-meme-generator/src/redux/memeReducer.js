
import { ADD_MEME, REMOVE_MEME } from './memeActions';

const initialState = {
  memes: []
};


const memeReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MEME:
      return {
        ...state,
        memes: [...state.memes, action.payload]
      };

    case REMOVE_MEME:
      return {
        ...state,
        memes: state.memes.filter(meme => meme.id !== action.payload)
      };

    default:
      return state;
  }
};

export default memeReducer;
