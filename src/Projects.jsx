import React, { useEffect, useState } from "react";
import Background from "./Backgrounds/Background";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export function Card(props)
{
    return(
        <div className="bg-white flex flex-col w-full swiper-slide" style={{boxShadow: "3px 3px 8px 2px #00000030"}} data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-out-back">
            <div className="py-4 border-b-2">
                <h1 className="px-8 line-clamp-1">{props.Title}</h1>
            </div>
            <p className="h-[250px] overflow-auto px-8 py-4">{props.Description}</p>
            <div className="px-8 py-4 border-t-2">
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
    const [Info, setInfo] = useState([])

    useEffect(() => {
        async function getInfo()
        {
            const temp = []
            const response = await fetch("https://bojan-ivanovski.github.io/JSON-Repo/Projects.json")
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
                <div className="flex-1 flex flex-col gap-3">
                    <h1>These are just my latest projects</h1>
                    <p>Check out all of my projects in the projects catalog</p>
                </div>
                <a href={url+"#/Projects"}><button>Projects Catalog</button></a>
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