import React from "react";
import barber from "../Assets/barber.png";
const Home = () => {
    return (
    <div>
        <div className="intro-home">
        <h1 className="title">Cedick Barber</h1>
            <div className="home-page">
            <img 
            src={barber}  
            alt="barber"
            className="barber-img"
            />
            </div>
            </div>
        <div className="paragraph">
        <h2>Hello, my name is Cedrick Tagaban</h2>
        <p>I am a self-employed barber.</p>
        </div>
    </div>
    );
};

export default Home;