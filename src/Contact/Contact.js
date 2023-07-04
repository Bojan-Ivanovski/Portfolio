import React from "react";
import "./Contact.css"

export default function Contact(props)
{
    return(
        <div className={`LightMode-Color Contact`}>
            <h1 className="Handle">CONTACT</h1>
            <form action="https://formspree.io/f/xrgwznlp" method="POST">
                <label><h2>Reach me from this website</h2></label>
                <input placeholder="Name and Last name" name="Name" required></input>
                <input placeholder="Email" name="Email" required></input>
                <input placeholder="Subject" name="Subject" required></input>
                <textarea placeholder="Message" name="Message" required></textarea>
                <button>Send</button>
            </form>
            <div className="Move">
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
        </div>
    )
}