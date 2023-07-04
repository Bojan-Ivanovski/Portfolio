import React, { useState } from "react";
import "./Projects.css"
import Background from "../Backgrounds/Background";
import Info from "./ProjectsInfo"

export function Card(props)
{
    return(
        <div className="Card">
            <div>
                <h1>{props.Title}</h1>
                <p>{props.Description}</p>
                <a href={props.Link}><button disabled={props.Link ? false : true}>Check it out on github</button></a>
            </div>
        </div>
    )
}

export default function Projects(props)
{
    const [Current, setCurrent] = useState(0)
    const cards = Info.map((data, index)=><Card key={index} {...data}></Card>)
    const backCard = () => setCurrent((prev) => prev === 0 ? 0 : prev-1)
    const nextCard = () => setCurrent((prev) => prev === cards.length-1 ? cards.length-1 : prev+1)

    return(
        <>
        <Background Background="Background2"></Background>
        <div className="LightMode-Color Projects">
            <h1 className="Handle">PROJECTS</h1>
            <div className="NextPanel" onClick={nextCard}>
                <span className="material-symbols-outlined Position">double_arrow</span>
            </div>
            {cards[Current]}
            <div className="PrevPanel" onClick={backCard}>
            <span className="material-symbols-outlined Position">keyboard_double_arrow_left</span>
            </div>
            <div className="Card" style={{margin:0, width:"565px",height:"300px"}}>
                <div style={{width: "92%"}}>
                    <h1>These are just my latest projects</h1>
                    <p style={{height:"100px"}}>Check out all of my projects in the projects catalog</p>
                    <a href="/#/Projects"><button>Projects Catalog</button></a>
                </div>
            </div>
        </div>

        </>

    )
}