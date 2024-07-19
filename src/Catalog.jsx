import React, { useEffect, useState } from "react";

import github from "./Assets/github.png"
import global from "./Assets/global.png"
import Background from "./Backgrounds/Background";
const info = []
export function Card(props)
{
    return(
        <div className="bg-white flex flex-col w-full swiper-slide" style={{boxShadow: "3px 3px 8px 2px #00000030"}} >
            <div className="py-4 border-b-2 font-semibold">
                <h1 className="px-8 line-clamp-1">{props.Title}</h1>
            </div>
            <p className="h-[250px] overflow-auto px-8 py-4">{props.Description}</p>
            <div className="px-8 py-4 border-t-2 flex items-center gap-5">
                {props.Link ? <a target="_blank" className="hover:opacity-50 transition-opacity duration-300" href={props.Link}><img src={global} alt="" width={32}/></a> : <></>}
                <span className="flex-1"></span>
                {props.GitLink ? <a target="_blank" className="hover:opacity-50 transition-opacity duration-300" href={props.GitLink}><img src={github} alt="" width={32}/></a> : <></>}
            </div>
        </div>
    )
}

export default function Catalog(props)
{


    if(localStorage.getItem("darkMode") === null)
        localStorage.setItem("darkMode", false)
    const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true")

    window.scrollTo(0,0);

    const [Info, setInfo] = useState([])


    document.body.style.overflow = "hidden";

    useEffect(() => {
        async function getInfo()
        {
            const response = await fetch("https://bojan-ivanovski.github.io/API-Repo/Projects.json")
            const data = await response.json()            
            
            setInfo(data);
        }
        getInfo()
    },[])


    const load = Info.map((value, index) => <Card key={index} {...value}></Card>)
    const url = window.location.href;
    
    return(
        <>
            
        
            <div className={`relative bg-white`}>
                <div className={`fixed flex items-center w-full p-5 gap-10 z-20  ${darkMode ? "invert" : ""}`}>
                    <a href={url.replace("#/Projects","")}><span className="material-symbols-outlined text-3xl text-body hover:text-secondary transition-all duration-300">start</span></a>
                    <div style={{flex: 1}}></div>
                    <a href={url.replace("#/Projects","")}><p className="text-3xl text-body SpecialFont hover:text-secondary transition-all duration-300">Bojan Ivanovski</p></a>
                </div>
                <div className={`w-full h-full z-0 fixed ${darkMode ? "invert" : ""} `}>
                    <Background class={`fixed top-0`} Background="Background1"></Background>
                
                    <div className="w-full h-full flex justify-start items-start max-[320px]:px-8 px-12 sm:px-28 py-20 overflow-auto">
                        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-10" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-out-back">
                            {load}
                        </div>
                    </div>

                    <h1 className="absolute bottom-0 left-3 text-[40px] text-body" >CATALOG</h1>
                </div>
            </div>
        
        
        </>
        
    )
}
