import React from "react";

function Poll(props)
{
    return <canvas onClick={() =>  window.scrollTo(0, props.Height)} className={props.active ? "Poll Poll-Active" : "Poll"}></canvas>
}


export default function Layout(props)
{
    const height = document.querySelector('body').scrollHeight
    const url = window.location.href;
    return (
        <div className={`relative bg-white`}>
            <div className={`fixed flex items-center w-full p-5 gap-10 z-20  ${props.mode ? "invert" : ""}`}>
                <a className="text-3xl text-body SpecialFont hover:text-secondary transition-all duration-300" href={url}>Bojan Ivanovski</a>
                <div style={{flex: 1}}></div>
                <p className="cursor-pointer text-lg text-body hover:text-secondary transition-all duration-300 max-md:hidden" onClick={() => window.scrollTo(0,0)}>HOME</p>
                <p className="cursor-pointer text-lg text-body hover:text-secondary transition-all duration-300 max-md:hidden" onClick={() => window.scrollTo(0, height/3)}>ABOUT ME</p>
                <p className="cursor-pointer text-lg text-body hover:text-secondary transition-all duration-300 max-md:hidden" onClick={() => window.scrollTo(0, height/2)}>PROJECTS</p>
                <p className="cursor-pointer text-lg text-body hover:text-secondary transition-all duration-300 max-md:hidden" onClick={() => window.scrollTo(0, height)}>CONTACT</p>
            </div>
            <div className={`w-full h-screen fixed z-0  ${props.mode ? "invert" : ""} `}>
                {props.children}
            </div>
            <div className={`fixed right-4 top-0 py-4 max-[369px]:justify-start justify-end w-14 sm:w-32 items-end flex flex-col gap-2 h-full z-10  ${props.mode ? "invert" : ""}`}>
                <Poll active={props.pCount === 0} Height={0} page={0}></Poll>
                <Poll active={props.pCount === 1} Height={height/3} page={1}></Poll>
                <Poll active={props.pCount === 2} Height={height/2} page={2}></Poll>
                <Poll active={props.pCount === 3} Height={height} page={3}></Poll>
            </div>
        </div>
    )
}
