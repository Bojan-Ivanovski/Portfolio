import React, { useEffect, useState } from "react";
import Background from "./Backgrounds/Background";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import github from "./Assets/github.png"
import global from "./Assets/global.png"
import linkedin from "./Assets/linkedin.png"

import 'swiper/css';
import 'swiper/css/pagination';

export function Card(props)
{
    return(
        <div className="bg-white flex flex-col w-full swiper-slide" style={{boxShadow: "3px 3px 8px 2px #00000030"}} data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-out-back">
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

export default function Projects(props)
{
    const [Info, setInfo] = useState([])

    useEffect(() => {
        async function getInfo()
        {
            const temp = []
            const response = await fetch("https://bojan-ivanovski.github.io/API-Repo/Projects.json")
            const data = await response.json()            
            data.forEach((element, index) => {
                if(index < 3)
                    temp.push(element)
            });
            setInfo(temp);
        }
        getInfo()
    },[])

    const [Current, setCurrent] = useState(0)
    const cards = Info.map((data, index)=><SwiperSlide key={index}><Card {...data}></Card></SwiperSlide>)
    const url = window.location.href;


    return(
        <>
        <Background Background="Background2"></Background>
        <div className="w-full h-full flex flex-col justify-center items-center gap-10 container mx-auto overflow-hidden px-4">
            <div data-aos="fade-down" data-aos-duration="1500" data-aos-easing="ease-out-back" className="w-full px-8 py-8  gap-x-10 gap-y-8 max-sm:items-start max-sm:flex-col bg-white flex items-center" style={{boxShadow: "3px 3px 8px 2px #00000030"}}>
                <div className="flex-1 flex flex-col gap-3 max-sm:hidden">
                    <h1 className="font-semibold">These are just my latest projects</h1>
                    <p>Check out all of my projects in the projects catalog</p>
                </div>
                <a className="flex max-sm:w-full items-center group justify-center gap-4 relative sm:px-8 hover:pr-12 py-2 hover:boder-secondary hover:bg-primary/20 transition-all duration-300 border border-body bg-secondary/10" href={url+"#/Projects"} onClick={() => window.scrollTo(0,0)}>
                    Catalog
                    <span className="absolute right-full transition-all opacity-0 group-hover:opacity-100 duration-300 group-hover:right-4 material-symbols-outlined">arrow_forward</span>
                </a>
            </div>
            <Swiper className="swiper w-full h-auto overflow-visible" modules={[Pagination]} pagination={true} spaceBetween={40} slidesPerView={3} breakpoints={{
              0:{
                slidesPerView: 1
              },
              600:{
                slidesPerView: 2
              },
              1030:{
                slidesPerView: 3
              },
            }}>
                {cards}
            </Swiper>
        </div>
        
        <h1 className="absolute bottom-0 left-3 text-[40px] text-body" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-out-back">PROJECTS</h1>
        </>

    )
}
