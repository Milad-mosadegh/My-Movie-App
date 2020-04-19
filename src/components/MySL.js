import React, { useState, useEffect } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const MyTrying = ({ title, sub }) => {
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=a3ce8e966aef0ecef3ec77d435bc9197&query=${title}`
    let imagePath = `https://image.tmdb.org/t/p/w300_and_h450_bestv2`;
    const [cat, setCat] = useState("")

    const info = () => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setCat(data.results)
            })
    }
    useEffect(() => {
        setCat(info)
    }, [])

    var settings = {

        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="cont">
            <h4>{sub}</h4>
            <Slider {...settings} className="slick">
                {cat ? cat.map(data =>
                    (<div className="kenareham">
                        <div className='posterBox'>
                            <img src={imagePath + data.poster_path} alt="" />
                        </div>
                        <h3>{data.title}</h3>
                    </div>))
                    : null}
            </Slider>
        </div>
    );
}

export default MyTrying;