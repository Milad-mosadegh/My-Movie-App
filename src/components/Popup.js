import React from 'react';

const Popup = ({ selected, closePopup }) => {
    var imagePath = `https://image.tmdb.org/t/p/w300_and_h450_bestv2`;
    return (
        <section className="popup">
            <div className="content">
                <h2>
                    {selected.original_title}
                    <span>
                        {selected.release_date}
                    </span>
                </h2>
                <p className="rating">
                    Rating: {selected.vote_average}
                </p>

                <div className="plot">
                    <img src={imagePath + selected.poster_path} alt="" />
                    <p>{selected.overview}</p>
                </div>
                <button className="close" onClick={closePopup}>Close</button>
            </div>
        </section>
    );
}

export default Popup;