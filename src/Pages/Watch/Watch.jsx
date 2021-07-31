import React from 'react';
import "./watch.scss";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackIcon />
                &nbsp;&nbsp;Home
            </div>
            <video className="autoplay"  
             controls 
             progress 
             src="https://vod-progressive.akamaized.net/exp=1627707134~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2471%2F15%2F387358308%2F1633432830.mp4~hmac=ff811d449a0d2ad41185f09a1fc16b3cb577b72e0ef26beec6c7f09a02f46d3c/vimeo-prod-skyfire-std-us/01/2471/15/387358308/1633432830.mp4" 
            />
        </div>
    )
}

export default Watch
