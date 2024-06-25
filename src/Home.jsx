import React from "react";

import  Background  from "./Backgrounds/Background";

export default function Home(props)
{
    return(
        <>
        <Background Background="Background2"></Background>
        <div className="w-full h-full flex justify-center items-center">
            <h1 className="text-4xl lg:text-6xl xl:text-8xl text-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-out-back" data-aos-delay="300">Bojan Ivanovski</h1>
        </div>
        </>
    )
}