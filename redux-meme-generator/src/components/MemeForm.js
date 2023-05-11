import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMeme } from '../redux/memeActions';

const MemeForm = () => {
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        const id = Math.floor(Math.random() * 10000);
        const newMeme = { topText, bottomText, imageUrl, id };

        dispatch(addMeme(newMeme));

        setTopText('');
        setBottomText('');
        setImageUrl('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={topText}
                onChange={e => setTopText(e.target.value)}
                placeholder="Top Text"
                required
            />
            <input
                type="text"
                value={bottomText}
                onChange={e => setBottomText(e.target.value)}
                placeholder="Bottom Text"
                required
            />
            <input
                type="text"
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
                placeholder="Image URL"
                required
            />
            <button type="submit">Create Meme</button>
        </form>
    );
};

export default MemeForm;
