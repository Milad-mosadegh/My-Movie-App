import React from 'react';
import './cardStyle.css'



const Result = ({ result, openPopup }) => {
    let imagePath = `https://image.tmdb.org/t/p/w300_and_h450_bestv2`;

    return (

        <div className=" box" onClick={() => openPopup(result.id)}>
            <div className="imgBox">
                <img src={imagePath + result.poster_path} alt="" />
            </div>
            <div className="content">
                <h3>{result.original_title}</h3>
            </div>
        </div>

    );
}

export default Result;