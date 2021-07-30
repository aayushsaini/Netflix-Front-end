import React, { useRef, useState } from 'react';
import "./listitems.scss";
import img from "./im1.jpg";
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';

const ListItem = (props) => {

    const someRef = useRef();
    const currentIndex = props.index;
    const [isHovered, setIsHovered] = useState(false);
    // console.log(currentIndex);

    const trailer =  "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    return (
        <div className="list-items" 
         style={{left: isHovered && currentIndex*225+40 + currentIndex*2.5}}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
         ref={someRef}
        >
            <img src={img}
            // temp fix gotta change the img source
             alt=""
             />
             {isHovered && (    
                 <>
                    <video src={trailer} autoPlay={true} loop />   
                    <div className="item-info-sec">
                        <div className="icons">
                            <PlayCircleFilledWhiteOutlinedIcon className="icon"/>
                            <AddCircleOutlineOutlinedIcon className="icon"/>
                            <ThumbUpAltOutlinedIcon className="icon"/>
                            <ThumbDownAltOutlinedIcon className="icon"/>
                        </div>
                        <div className="item-info-text">
                            <span>1Hr 40Mins</span>
                            <span class="age-limit">13+</span>
                            <span>2019</span>
                        </div>
                        <div className="item-info-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ab hic voluptas repellat quas error vitae est quibusdam earum praesentium...
                        </div>
                        <div className="item-info-genre">Adventure</div>
                    </div>
                </>
             )}
        </div>
    )
}

export default ListItem
