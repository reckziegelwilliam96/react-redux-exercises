import React from 'react';

const Meme = ({ meme, handleRemove }) => {
    return (
        <div className="meme">
            <h2 className="top">{meme.topText}</h2>
            <img src={meme.imageUrl} alt="meme" />
            <h2 className="bottom">{meme.bottomText}</h2>
            <button onClick={() => handleRemove(meme.id)}>Delete</button>
        </div>
    );
};

export default Meme;
