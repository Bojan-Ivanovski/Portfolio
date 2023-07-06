import React from "react";
import "./Layout.css"

function Poll(props)
{
    return <canvas onClick={() =>  window.scrollTo(0, props.Height)} className={props.active ? "Poll Poll-Active" : "Poll"}></canvas>
}


export default function Layout(props)
{
    const height = document.querySelector('body').scrollHeight
    const url = window.location.href;
    return (
        <div className="LightMode-BackColor Layout">
            <div className="LightMode-Color Heading">
                <a href={url}><p style={{marginLeft:"20px"}}>Bojan Ivanovski</p></a>
                <div style={{flex: 1}}></div>
                <h3 onClick={() => window.scrollTo(0,0)}>HOME</h3>
                <h3 onClick={() => window.scrollTo(0, height/3)}>ABOUT ME</h3>
                <h3 onClick={() => window.scrollTo(0, height/2)}>PROJECTS</h3>
                <h3 style={{marginRight:"20px"}} onClick={() => window.scrollTo(0, height)}>CONTACT</h3>
            </div>
            <div>
                {props.children}
            </div>
            <div className="Polls">
                <Poll active={props.pCount === 0} Height={0} page={0}></Poll>
                <Poll active={props.pCount === 1} Height={height/3} page={1}></Poll>
                <Poll active={props.pCount === 2} Height={height/2} page={2}></Poll>
                <Poll active={props.pCount === 3} Height={height} page={3}></Poll>
            </div>
        </div>
    )
}
