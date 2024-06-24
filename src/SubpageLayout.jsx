import React, {useState} from "react";
import Background from "./Backgrounds/Background";

function General()
{
    return <>
        <Background Background="Background1"></Background>
        <main className="General">
            <h1>General Info</h1>
            <p>
                Hello, I'm Bojan Ivanovski. 
                I am currently pursuing a major in Computer Engineering at The Faculty of Computer Science and Engineering. 
                Although I'm in my first year of college,
                I have been actively learning and practicing programming since first year of high school.
            </p>
            <p>
                I have gained a wide range of skills in software development and IT, 
                which helps me excel in different areas of these fields.
            </p>
    </main>
    </>
}

function Experience()
{

    return <> 
        <Background Background="Background2"></Background>
        <main className="Experience">
            <h1>Experience</h1>
            <p>
                In terms of experience.
                I have a strong foundation in both frontend and backend technologies, 
                allowing me to design and code dynamic and visually appealing webpages. 
                Additionally, I have experience building desktop applications to streamline processes and meet specific needs.
            </p>
            <p>
                I also have a background as an IT specialist in a company that has provided me with practical experience in providing technical support,
                troubleshooting issues, and maintaining network infrastructure as well as keeping a database in check.
                In terms of my knowledge of databases, I have acquired a strong understanding through projects and gained a good level of knowledge working with them.

            </p>
        </main>
    </>
}

function Hobbies()
{

    return <>
        <Background Background="Background1"></Background>
        <main className="Hobbies">
            <h1>Hobbies and Goals</h1>
            <p>
                Furthermore, I have a passion for robotics and electronics, and I have successfully completed several projects in these areas. 
                These projects have allowed me to further enhance my technical skills and foster creativity.
            </p>
            <p>
                My goal is to get the most out of my diverse skill set, educational background, 
                and real-world experience to contribute to innovative projects and help organizations thrive in the ever-evolving world of technology. 
                I am driven by a passion for continuous learning and pushing boundaries, 
                and I am eager to take on new challenges that allow me to grow both professionally and personally.
            </p>
        </main>
        </>
        
}

function ReachOut()
{
    return <>
        <Background Background="Background2"></Background>
        <main className="ReachOut">
            <h1>Contact me</h1>
            <p>
                If you're looking for a developer with a wide range of expertise, a strong educational foundation,
                and a genuine enthusiasm for technology, 
                I would be thrilled to collaborate with you on your next project. 
                Let's turn ideas into reality and create exceptional digital experiences together.
            </p>
            <p>
                Whether you are a developer or a company, I am always open to new opportunities. 
                Please feel free to reach out to me personally with the info in the contact section or by using the contact form on the website.
            </p>
        </main>
    </>
}

export default function Subpage(props)
{
    const [SlideCount, setSlideCount] = useState(0)
    const goToSlide = (n) => {setSlideCount(n)}
    const slides = [<General/>, <Experience/>, <Hobbies/>,<ReachOut/>]
    const bar = (window.innerHeight /  document.body.offsetHeight ) * window.innerHeight
    const height = (document.querySelector('body').scrollHeight) / 4;
    window.addEventListener('scroll', () => {
        if(window.scrollY > height*3  - bar)
            goToSlide(3)
        else if(window.scrollY > height*2  - bar)
            goToSlide(2)
        else if(window.scrollY > height*1  - bar)
            goToSlide(1)
        else
            goToSlide(0)
    })
    const url = window.location.href;
    return(
        <>
            <div className="Head">
                <a href={url.replace("#/MoreAboutMe","")}><span class="material-symbols-outlined Control" style={{marginLeft:"20px"}}>start</span></a>
                <p style={{flex:1}}></p>
                <a href={url.replace("#/MoreAboutMe","")}><p className="Name" style={{marginRight:"20px"}}>Bojan Ivanovski</p></a>
            </div>
            <div className="Subpage">
            
            {slides[SlideCount]}
        </div>
        </>
        
    )
}