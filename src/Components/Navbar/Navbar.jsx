import React, { useState } from 'react';
import "./Navbar.scss";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset <= 0 ? false:true);
        return () => (window.onscroll = null);
    };

    console.log(isScrolled);

    return (
        <div className={isScrolled ? "navbar scrolled":"navbar"}>
            <div className="container">
                <div className="left">
                    <img className="logo-img" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                     alt="Logo" />
                     <span>Home</span>
                     <span>Series</span>
                     <span>Movies</span>
                     <span>New &amp; Popular </span>
                     <span>My list</span>
                </div>
                <div className="right">
                    <SearchIcon className="nav-right-icons"/>
                    <span>KID</span>
                    <NotificationsIcon className="nav-right-icons"/>
                    <img className="usr-profile-img" src="https://yt3.ggpht.com/yti/APfAmoEiAUN98YpNxkXiiXFmlEH3byMOa_LxdtuIqFkWIw0=s88-c-k-c0x00ffffff-no-rj-mo" 
                    alt="user" />
                    <div className="nav-dropdown-options">
                        <ArrowDropDownIcon className="nav-right-icons"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
