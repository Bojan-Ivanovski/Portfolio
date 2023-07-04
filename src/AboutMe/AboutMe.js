import React from "react";
import "./AboutMe.css"
import Background from "../Backgrounds/Background";

export default function About({onThis})
{
    return(
        <>
        <Background Background="Background1"></Background>
        <div className="LightMode-Color AboutMe">
            <h1 className="Handle">ABOUT ME</h1>
            <div>
                <h1>Hello, I'm Bojan Ivanovski</h1>
                <p>I'm a versatile developer with a passion for technology and a deep understanding of computers. As a Computer Engineering major, I have acquired a diverse skill set that allows me to excel in various aspects of software development and IT.</p>
                <a href="/MoreAboutMe"><button>Show me more</button></a>
            </div>
        </div>
        </>
        
    )
}