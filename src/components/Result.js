import React from 'react';
import './cardStyle.css'


const Result = ({ result, openPopup }) => {
    var imagePath = `https://image.tmdb.org/t/p/w300_and_h450_bestv2`;
    return (
        <div className="box" onClick={() => openPopup(result.id)}>
            {/* <img src={imagePath + result.poster_path} alt="" />
            <h3>{result.original_title}</h3> */}

            <div className="imgBox">
                <img src={imagePath + result.poster_path} alt="" />
            </div>
            <div className="content">
                <h3>{result.original_title}</h3>
                {/* <span>{result.overview}</span> */}
            </div>
        </div>
    );
}

export default Result;