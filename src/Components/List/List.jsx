import React, { useRef } from 'react';
import "./list.scss";
import ListItem from '../ListItems/ListItems';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const List = () => {

    const listRef = useRef();
    let stepsL = 1;
    let stepsR = 1;

    const handleClick = (direction) => {
        if (direction === "left" && stepsR > 1) {
            listRef.current.style.transform = `translateX(${235*stepsL}px)`; 
            listRef.current.style.tansition = `all ease 1s`; 
            stepsL++;
            stepsR--;
        }
        else if (direction === "right") {
            listRef.current.style.transform = `translateX(${-235*stepsR}px)`;
            listRef.current.style.tansition = `all ease 1s`; 
            stepsR++;
            stepsL--;
        }
    };

    return (
        <div className="list">
            <span className="list-title">Continue Watching...</span>
            <div className="wrapper">
                <ArrowBackIosIcon className="slider-arrow left" onClick={() => handleClick("left")} />
                <div className="container" ref={listRef}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosIcon className="slider-arrow right" onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}

export default List
