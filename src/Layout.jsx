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
        <div className="relative">
            <div className="fixed flex items-center w-full p-5 gap-10 z-20">
                <a className="text-xl" href={url}>Bojan Ivanovski</a>
                <div style={{flex: 1}}></div>
                <h3 className="cursor-pointer" onClick={() => window.scrollTo(0,0)}>HOME</h3>
                <h3 className="cursor-pointer" onClick={() => window.scrollTo(0, height/3)}>ABOUT ME</h3>
                <h3 className="cursor-pointer" onClick={() => window.scrollTo(0, height/2)}>PROJECTS</h3>
                <h3 className="cursor-pointer" onClick={() => window.scrollTo(0, height)}>CONTACT</h3>
            </div>
            <div className="w-full h-screen fixed z-0">
                {props.children}
            </div>
            <div className="fixed right-8 top-0 justify-center w-14 sm:w-24 items-end flex flex-col gap-2 h-full z-10">
                <Poll active={props.pCount === 0} Height={0} page={0}></Poll>
                <Poll active={props.pCount === 1} Height={height/3} page={1}></Poll>
                <Poll active={props.pCount === 2} Height={height/2} page={2}></Poll>
                <Poll active={props.pCount === 3} Height={height} page={3}></Poll>
            </div>
        </div>
    )
}
