import React from 'react';
import Featured from '../Components/Featured/Featured';
import List from '../Components/List/List';
import Navbar from '../Components/Navbar/Navbar';
import "./home.scss";

const  Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Featured type="" />    {/* Pass movies or series */}
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

export default Home
