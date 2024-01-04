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
                <h2 className="MobileP">Check the project catalog for more information or go into desktop mode.</h2>
                {
                props.LinkOther ? 
                <a href={props.LinkOther}><button>Check it out</button></a>
                :<a href={props.Link}><button disabled={props.Link ? false : true}>Check it out on github</button></a>
                }
            </div>
        </div>
    )
}

export default function Projects(props)
{
    const [Current, setCurrent] = useState(0)
    const cards = Info.map((data, index)=><div className="CardMove"><Card key={index} {...data}></Card></div>)
    const backCard = () => setCurrent((prev) => prev === 0 ? 0 : prev-1)
    const nextCard = () => setCurrent((prev) => prev === cards.length-1 ? cards.length-1 : prev+1)
    const url = window.location.href;

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
            <div className="Card DiffCard">
                <div>
                    <h1>These are just my latest projects</h1>
                    <p>Check out all of my projects in the projects catalog</p>
                    <a href={url+"#/Projects"}><button>Projects Catalog</button></a>
                </div>
            </div>
        </div>

        </>

    )
}