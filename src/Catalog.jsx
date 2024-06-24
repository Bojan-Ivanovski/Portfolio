import React from "react";

const info = []

function Card(props)
{
    return(
        <div className="Card">
            <div>
                <h1>{props.Title}</h1>
                <p style={{display: "block"}}>{props.Description}</p>
                {
                props.LinkOther ? 
                <a href={props.LinkOther}><button>Check it out</button></a>
                :<a href={props.Link}><button disabled={props.Link ? false : true}>Check it out on github</button></a>
                }
            </div>
        </div>
    )
}

export default function Catalog(props)
{
    document.querySelector("body").style.overflow = "hidden";
    window.scrollTo(0,0);
    const load = info.map((value, index) => <main key={index}>{value.map((Value, Index) => <Card key={Index} {...Value}></Card>)}</main>)
    const url = window.location.href;
    


    return(
        <>
            <div className="Head">
                <a href={url.replace("#/Projects","")}><span className="material-symbols-outlined Control" style={{marginLeft:"20px"}}>start</span></a>
                <p style={{flex:1}}></p>
                <a href={url.replace("#/Projects","")}><p className="Name" style={{marginRight:"20px"}}>Bojan Ivanovski</p></a>
            </div>
            <div className="Catalog">
                <h1 className="Handle">CATALOG</h1>
                <div className="Holder">
                    {load}
                </div>  
            </div>
            
        </>
        
    )
}