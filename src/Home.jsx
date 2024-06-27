import React, { useState } from "react";

import  Background  from "./Backgrounds/Background";

export default function Home(props)
{
    const [hovered, setHovered] = useState(false);
    const height = document.querySelector('body').scrollHeight

    return(
        <>
        <Background Background="Background2"></Background>
        <div className="w-full h-full flex justify-center items-center">
            <canvas className={`absolute  ${hovered ? "w-full h-full rounded-0" : "w-0 h-0 rounded-full" } transition-all duration-[1s]  backdrop-invert z-[100]`}></canvas>
            <div onClick={() => {props.setMode(val => !val); setHovered(false); localStorage.setItem("darkMode",!(localStorage.getItem("darkMode") === "true"))}} onMouseEnter={()=> setHovered(true)} onMouseLeave={()=> setHovered(false)} className="z-[101] absolute w-full h-32 text-4xl opacity-0 cursor-pointer">Bojan Ivanovski</div>
            
            
            <div className="flex flex-col items-center">
                <p className="text-2xl">Hover or Click Me</p>
                <span className="material-symbols-outlined rotate-180">keyboard_arrow_up</span>
                <h1 className="text-4xl  text-center  lg:text-6xl xl:text-8xl text-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-out-back" data-aos-delay="300">Bojan Ivanovski</h1>
            
                <p onClick={() => window.scrollTo(0, height/3)} className="text-2xl mt-10 cursor-pointer">Scroll down</p>
                <span onClick={() => window.scrollTo(0, height/3)} className="material-symbols-outlined rotate-180 cursor-pointer">keyboard_arrow_up</span>
            </div>
            
        </div>
        </>
    )
}