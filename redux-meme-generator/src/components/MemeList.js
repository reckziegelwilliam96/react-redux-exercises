import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeMeme } from '../redux/memeActions';
import Meme from './Meme';

const MemeList = () => {
    const memes = useSelector(state => state.memes);
    const dispatch = useDispatch();

    const handleRemove = id => {
        dispatch(removeMeme(id));
    };

    return (
        <div className="meme-list">
            {memes.map(meme => (
                <Meme key={meme.id} meme={meme} handleRemove={handleRemove} />
            ))}
        </div>
    );
};

export default MemeList;
