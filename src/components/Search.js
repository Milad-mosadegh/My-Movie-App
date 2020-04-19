import React from 'react';


const Search = ({ handleInput, search }) => {
    return (
        <div>
            <section className="searchbox-wrap" >
                <input
                    type="text"
                    className="searchbox"
                    placeholder="Search A Movie "
                    onChange={handleInput}
                    onKeyDown={search}
                />
            </section>
        </div>
    );
}

export default Search;


