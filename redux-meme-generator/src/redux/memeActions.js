export const ADD_MEME = 'ADD_MEME';

export const addMeme = meme => ({
    type: ADD_MEME,
    payload: meme
});

export const REMOVE_MEME = 'REMOVE_MEME';

export const removeMeme = meme => ({
    type: REMOVE_MEME,
    payload: meme
})