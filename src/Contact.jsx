import React, { useState } from "react";
import  Background  from "./Backgrounds/Background";

import github from "./Assets/github.png"
import linkedin from "./Assets/linkedin.png"

function Form()
{
    return <form className="flex flex-col gap-4" action="https://formspree.io/f/xrgwznlp" method="POST">
        <h2 className="text-xl max-md:hidden">Reach me from this website</h2>
        <input className="mt-2 px-4 py-3 text-lg w-full" style={{boxShadow: "3px 3px 8px 2px #00000030"}} placeholder="Name and Last name" name="Name" required></input>
        <input className="mt-2 px-4 py-3 text-lg" style={{boxShadow: "3px 3px 8px 2px #00000030"}} placeholder="Email" name="Email" required></input>
        <input className="mt-2 px-4 py-3 text-lg" style={{boxShadow: "3px 3px 8px 2px #00000030"}} placeholder="Subject" name="Subject" required></input>
        <textarea rows={5} className="mt-2 px-4 py-3 text-lg resize-none" style={{boxShadow: "3px 3px 8px 2px #00000030"}} placeholder="Message" name="Message" required></textarea>
        <button className="group relative mt-2 px-4 py-3 text-lg bg-[#ffffff]" style={{boxShadow: "3px 3px 8px 2px #00000030"}}>
        <span className="absolute right-full transition-all opacity-0 group-hover:opacity-100 duration-300 group-hover:right-4 material-symbols-outlined">arrow_forward</span>
            Send</button>
    </form>
}

function Info()
{
    return <div className="flex flex-col gap-4">
        <h2 className="text-xl max-md:hidden">Reach me personally</h2>
        <div className="mt-2 px-4 py-3 text-lg bg-[#ffffff]" style={{boxShadow: "3px 3px 8px 2px #00000030"}}>
            <h3>Email:</h3>
            <p>0ivanovskibojan@gmail.com</p>
        </div>
        <div className="px-4 py-3 text-lg bg-[#ffffff]" style={{boxShadow: "3px 3px 8px 2px #00000030"}}>
            <h3>Check out my CV</h3>
            <button className="group relative w-full text-left">
        <span className="absolute right-full transition-all opacity-0 group-hover:opacity-100 duration-300 group-hover:right-4 material-symbols-outlined">arrow_forward</span>
            Download</button>
        </div>
        <div className="px-4 py-3 text-lg bg-[#ffffff] flex gap-5" style={{boxShadow: "3px 3px 8px 2px #00000030"}}>
            <a className="hover:opacity-50 transition-opacity duration-300" target="_blank" href="https://github.com/Bojan-Ivanovski"><img src={github} alt="" width={32}/></a>
            <a className="hover:opacity-50 transition-opacity duration-300" target="_blank" href="https://www.linkedin.com/in/bojan-ivanovski-aa9a34271"><img src={linkedin} alt="" width={32}/></a>
        </div>
    </div>
}


function MobileContact()
{
    const [Count, setCount] = useState(0);
    const page = [<Form></Form>,<Info></Info>]
    const change = (events) => {setCount(events.target.value)}
    return (
        <div className="md:hidden w-full px-8">
            <select onChange={change} className="text-2xl px-4 py-3 mb-4 w-full" style={{boxShadow: "3px 3px 8px 2px #00000030"}}>
                <option value={0}>Reach me from this website</option>
                <option value={1}>Reach me personally</option>
            </select>
            {page[Count]}
        </div>
    )
}

export default function Contact(props)
{
    return(
        <>
        <Background Background="Background1"></Background>
        <h1 className="absolute bottom-0 left-3 text-[40px] text-body" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-out-back">CONTACT</h1>
        <div className="h-full grid xl:grid-cols-2 container mx-auto justify-center items-center px-8">
            <div className={`grid max-md:hidden md:grid-cols-2 items-start gap-10`}>
          
                <Form></Form>
                <Info></Info>
            </div>
            <MobileContact></MobileContact>
        </div>
        </>
    )
}
