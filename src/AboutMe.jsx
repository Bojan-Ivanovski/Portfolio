import React from "react";
import Background from "./Backgrounds/Background";

export default function About({onThis})
{
    const url = window.location.href;
    return(
        <>
        <Background Background="Background1"></Background>
        <div className="w-full h-full grid md:grid-cols-2 items-center container mx-auto ">
            <div className="flex flex-col gap-4 px-4 items-start" data-aos="zoom-in-right" data-aos-duration="2000" data-aos-easing="ease-out-back">
                <h1 className="text-4xl mb-2">Hello, I'm Bojan Ivanovski</h1>
                <p className="text-2xl">I'm a versatile developer with a passion for technology and a deep understanding of computers. As a Computer Engineering major, I have acquired a diverse skill set that allows me to excel in various aspects of software development and IT.</p>
                <a className="flex items-center group justify-center gap-4 relative px-8 hover:pr-12 py-2 hover:boder-secondary hover:bg-primary/20 transition-all duration-300 border border-body bg-secondary/10" href={url+"#/MoreAboutMe"} onClick={() => window.scrollTo(0,0)}>
                    Show me more
                    <span className="absolute right-full transition-all opacity-0 group-hover:opacity-100 duration-300 group-hover:right-4 material-symbols-outlined">arrow_forward</span>
                </a>
            </div>
        </div>
        <h1 className="absolute bottom-0 left-3 text-[40px] text-body" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-out-back">ABOUT ME</h1>
        </>
    )
}