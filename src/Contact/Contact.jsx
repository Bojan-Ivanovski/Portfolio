import React, { useState } from "react";
import "./Contact.css"

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
            <h3 style={{marginTop:"10px"}}>Phone Number</h3>
            <p>+389 78 326 799</p>
            <p>078 326 799</p>
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
        <div className="LightMode-Color ContactMobile">
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
        <h1 className="LightMode-Color Handle">CONTACT</h1>
        <div className={`LightMode-Color Contact`}>
            <Form></Form>
            <Info></Info>
        </div>
        <MobileContact></MobileContact>
        </>
    )
}