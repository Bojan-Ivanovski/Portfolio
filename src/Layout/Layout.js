import React from "react";
import "./Layout.css"

function Poll(props)
{
    function setPage(n){props.onThis(n)}
    return <canvas onClick={() => setPage(props.page)} className={props.active ? "Poll Poll-Active" : "Poll"}></canvas>
}


export default function Layout(props)
{
    function setPage(n){props.onThis(n)}

    return (
        <div className="LightMode-BackColor Layout">
            <div className="LightMode-Color Heading">
                <a href="/"><p style={{marginLeft:"20px"}}>Bojan Ivanovski</p></a>
                <div style={{flex: 1}}></div>
                <h3 onClick={() => setPage(0)}>HOME</h3>
                <h3 onClick={() => setPage(1)}>ABOUT ME</h3>
                <h3 onClick={() => setPage(2)}>PROJECTS</h3>
                <h3 style={{marginRight:"20px"}} onClick={() => setPage(3)}>CONTACT</h3>
            </div>
            <div>
                {props.children}
            </div>
            <div className="Polls">
                <Poll active={props.pCount === 0} onThis={props.onThis} page={0}></Poll>
                <Poll active={props.pCount === 1} onThis={props.onThis} page={1}></Poll>
                <Poll active={props.pCount === 2} onThis={props.onThis} page={2}></Poll>
                <Poll active={props.pCount === 3} onThis={props.onThis} page={3}></Poll>
            </div>
            <div className="LightMode-Color Scroll">
                <h3>SCROLL</h3>
            </div>
            <canvas className="Scroll-Poll"></canvas>

        </div>
    )
}
