import React, { useState } from 'react';

import axios from 'axios'
import Results from './results';
import Popup from './Popup';
import MyTrying from './MySL';



function MainPage() {
    const [state, setState] = useState({
        s: "",
        result: [],
        selected: {}
    })

    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=a3ce8e966aef0ecef3ec77d435bc9197`


    const search = (e) => {
        if (e.key === "Enter") {
            axios(apiUrl + "&query=" + state.s)
                .then(({ data }) => {
                    let result = data.results
                    setState(prevState => {
                        return { ...prevState, result: result }
                    })
                    console.log(data);
                })
        }
    }


    const handleInput = (e) => {
        let s = e.target.value

        setState(prevState => {
            return { ...prevState, s: s }
        })
        // console.log(state.s);

    }

    const openPopup = id => {
        console.log(id);

        axios(apiUrl + "&query=" + id)
            .then(({ data }) => {
                let result = data;
                setState(prevState => {
                    return { ...prevState, selected: result }
                })
            })
    }

    const closePopup = () => {
        setState(prevState => {
            return { ...prevState, selected: {} }
        })
    }



    return (
        <div >

            {/* <header >
                <h1>Movie Finder</h1>
            </header> */}

            <div>
                <MyTrying title="romantic" sub='Romantic Movie' />
            </div>
            <div>
                <MyTrying title="war" sub='Action & War Movie' />
            </div>
            <div>
                <MyTrying title="music" sub='Musical Movie' />
            </div>

            {/* <div className="search-container">
                <Search handleInput={handleInput} search={search} />
            </div> */}
            <main>

                <div className="myResult">
                    <Results results={state.result} openPopup={openPopup} />
                </div>
                {state.selected.id ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
            </main>


        </div >
    );
}

export default MainPage;
