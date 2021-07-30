import React, { useRef } from 'react';
import "./list.scss";
import ListItem from '../ListItems/ListItems';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const List = () => {

    const listRef = useRef();
    let stepsL = 1;
    let stepsR = 1;

    // const [isMoved, setIsMoved] = useState(false);

    const handleClick = (direction) => {
        // setIsMoved(true);
        // console.log(listRef.current.getBoundingClientRect());
        if (direction === "left" && stepsR > 1) {
            listRef.current.style.transform = `translateX(${240*stepsL}px)`; 
            listRef.current.style.tansition = `all ease 1s`; 
            stepsL++;
            stepsR--;
        }
        else if (direction === "right") {
            listRef.current.style.transform = `translateX(${-240*stepsR}px)`;
            listRef.current.style.tansition = `all ease 1s`; 
            stepsR++;
            stepsL--;
        }
    };

    return (
        <div className="list">
            <span className="list-title">Continue Watching...</span>
            <div className="wrapper">
                <ArrowBackIosIcon 
                    className="slider-arrow left" 
                    onClick={() => handleClick("left")}
                />
                <div className="container" ref={listRef}>
                    {/* ALERT! Auto-indexing required here */}
                    <ListItem index={0} />
                    <ListItem index={1} />
                    <ListItem index={2} />
                    <ListItem index={3} />
                    <ListItem index={4} />
                    <ListItem index={5} />
                    <ListItem index={6} />
                    <ListItem index={7} />
                    <ListItem index={8} />
                    <ListItem index={9} />
                </div>
                <ArrowForwardIosIcon 
                 className="slider-arrow right" 
                 onClick={() => handleClick("right")} 
                />
            </div>
        </div>
    )
}

export default List
