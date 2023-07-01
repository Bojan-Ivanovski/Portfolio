import React from "react";
import "./Layout.css"

function Poll(props)
{
    return <canvas className={props.active ? "Poll Poll-Active" : "Poll"}></canvas>
}


export default function Layout(props)
{
    return (
        <div className="LightMode-BackColor Layout">
            <div className="LightMode-Color Heading">
                <p style={{marginLeft:"20px"}}>Bojan Ivanovski</p>
                <div style={{flex: 1}}></div>
                <h3>HOME</h3>
                <h3>ABOUT ME</h3>
                <h3>PROJECTS</h3>
                <h3 style={{marginRight:"20px"}}>CONTACT</h3>
            </div>
            <div>
                {props.children}
            </div>
            <div className="Polls">
                <Poll active={true}></Poll>
                <Poll></Poll>
                <Poll></Poll>
                <Poll></Poll>
            </div>
            <div className="LightMode-Color Scroll">
                <h3>SCROLL</h3>
            </div>
            <canvas className="Scroll-Poll"></canvas>

        </div>
    )
}
