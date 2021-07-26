import React from 'react';
import "./Featured.scss";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const Featured = (props) => {

    const type = props.type;

    return (
        <div className="featured">

            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Comic">Comic</option>
                        <option value="Crime">Crime</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Historical">Historical</option>
                        <option value="Romance">Romance</option>
                        <option value="Sci-fi">Sci-fi</option>
                        <option value="Thriller">Thriller</option>
                    </select>
                </div>
            )}

            <img className="featured-img" src="https://images.pexels.com/photos/3811867/pexels-photo-3811867.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            <div className="featured-info">
                <img src="https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABREli4l_HPdQqXFapEggrwQKxcxJ6_LMrUgm2uKhldxk6O3RULixjxdR4zJrlyFy5TsB59fZknoUU28bqpom47i_Bmr0XV7e95pjjcJH6-iqhE_Ldxty8b9rK_fN1fKqwyWG88zde_ZQJr9KTM5EjQKBfu3-4tpQ4kNp5J0BRmUlmA.png?r=032" 
                alt="" />
                <span className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minus eius alias eaque, quisquam earum illum omnis facilis, asperiores, voluptates odit. Atque doloribus sunt molestiae amet. Adipisci beatae repudiandae maxime!
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrowIcon /> <span>&nbsp;Play</span>
                    </button>
                    <button className="info">
                        <InfoOutlinedIcon /> <span>&nbsp;More</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
