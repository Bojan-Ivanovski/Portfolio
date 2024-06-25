import React, { useState } from "react";
import  Background  from "./Backgrounds/Background";

function Form()
{
    return <form action="https://formspree.io/f/xrgwznlp" method="POST">
        <label><h2>Reach me from this website</h2></label>
        <input placeholder="Name and Last name" name="Name" required></input>
        <input placeholder="Email" name="Email" required></input>
        <input placeholder="Subject" name="Subject" required></input>
        <textarea placeholder="Message" name="Message" required></textarea>
        <button>Send</button>
    </form>
}

function Info()
{
    return <div className="Move">
        <h2>Reach me personally</h2>
        <div>
            <h3>Email:</h3>
            <p>0ivanovskibojan@gmail.com</p>
        </div>
        <div>
            <h3>Check out my CV</h3>
            <button>Download</button>
        </div>
    </div>
}


function MobileContact()
{
    const [Count, setCount] = useState(0);
    const page = [<Form></Form>,<Info></Info>]
    const change = (events) => {setCount(events.target.value)}
    return (
        <div className="">
            <select onChange={change}>
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
        <div className={`h-screen w-full`}>
            <Form></Form>
            <Info></Info>
        </div>
        <MobileContact></MobileContact>
        </>
    )
}
