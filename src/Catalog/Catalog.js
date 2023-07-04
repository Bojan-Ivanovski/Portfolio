import React from "react";
import "./Catalog.css"
import {Card} from "../Projects/Projects"
import info from "./CatalogInfo";

export default function Catalog(props)
{
    document.querySelector("body").style.overflow = "hidden";

    const load = info.map((value, index) => <main key={index}>{value.map((Value, Index) => <Card key={Index} {...Value}></Card>)}</main>)
    


    return(
        <>
            <div className="Head">
                <a href="/"><span className="material-symbols-outlined Control" style={{marginLeft:"20px"}}>start</span></a>
                <p style={{flex:1}}></p>
                <a href="/"><p className="Name" style={{marginRight:"20px"}}>Bojan Ivanovski</p></a>
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