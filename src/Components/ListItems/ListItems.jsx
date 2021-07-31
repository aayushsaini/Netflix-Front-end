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

    const trailer =  "https://vod-progressive.akamaized.net/exp=1627708407~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4104%2F18%2F470523821%2F2093541345.mp4~hmac=16bfd7ff5b228071fa9c74cad060b02beb7fa4f31565c70bd088a393b94d6345/vimeo-prod-skyfire-std-us/01/4104/18/470523821/2093541345.mp4";

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
