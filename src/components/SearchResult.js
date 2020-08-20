import React, { useState } from 'react'
import Search from './Search'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Results from './results'

function SearchResult() {
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
    }
    return (
        <div >
            <div className="container">
                <Search handleInput={handleInput} search={search} />
            </div>

            <div className="myResult">
                <Results results={state.result} />
            </div>
        </div>
    )
}

export default SearchResult
