import React, {useEffect, useState} from "react";
import Background from "./Backgrounds/Background";

function General()
{
    return <>
        <Background Background="Background1"></Background>
        <div className="w-full h-full grid md:grid-cols-2 items-center container mx-auto ">
            <div className="flex flex-col gap-4 px-4 items-start" data-aos="zoom-in-right" data-aos-duration="2000" data-aos-easing="ease-out-back">
                <h1 className="text-4xl mb-2">General Info</h1>
                <p className="text-2xl">
                    Hello, I'm Bojan Ivanovski. 
                    I am currently pursuing a major in Computer Engineering at The Faculty of Computer Science and Engineering. 
                    Although I'm in my first year of college,
                    I have been actively learning and practicing programming since first year of high school.
                </p>
                <p className="text-2xl">
                    I have gained a wide range of skills in software development and IT, 
                    which helps me excel in different areas of these fields.
                </p>
            </div>
        </div>
    </>
}

function Experience()
{

    return <> 
        <Background Background="Background2"></Background>
        <div className="w-full h-full grid md:grid-cols-2 items-center container mx-auto ">
            <div></div>
            <div className="flex flex-col gap-4 px-4 items-start" data-aos="zoom-in-right" data-aos-duration="2000" data-aos-easing="ease-out-back">
                <h1 className="text-4xl mb-2">Experience</h1>
                <p className="text-2xl">
                    In terms of experience.
                    I have a strong foundation in both frontend and backend technologies, 
                    allowing me to design and code dynamic and visually appealing webpages. 
                    Additionally, I have experience building desktop applications to streamline processes and meet specific needs.
                </p>
                <p className="text-2xl">
                    I also have a background as an IT specialist in a company that has provided me with practical experience in providing technical support,
                    troubleshooting issues, and maintaining network infrastructure as well as keeping a database in check.
                    In terms of my knowledge of databases, I have acquired a strong understanding through projects and gained a good level of knowledge working with them.

                </p>
            </div>
        </div>
    </>
}

function Hobbies()
{

    return <>
        <Background Background="Background1"></Background>
        <div className="w-full h-full grid md:grid-cols-2 items-center container mx-auto ">
            <div className="flex flex-col gap-4 px-4 items-start" data-aos="zoom-in-right" data-aos-duration="2000" data-aos-easing="ease-out-back">
                <h1 className="text-4xl mb-2">Hobbies and Goals</h1>
                <p className="text-2xl">
                    Furthermore, I have a passion for robotics and electronics, and I have successfully completed several projects in these areas. 
                    These projects have allowed me to further enhance my technical skills and foster creativity.
                </p>
                <p className="text-2xl">
                    My goal is to get the most out of my diverse skill set, educational background, 
                    and real-world experience to contribute to innovative projects and help organizations thrive in the ever-evolving world of technology. 
                    I am driven by a passion for continuous learning and pushing boundaries, 
                    and I am eager to take on new challenges that allow me to grow both professionally and personally.
                </p>
            </div>
        </div>
        </>
        
}

function ReachOut()
{
    return <>
        <Background Background="Background2"></Background>
        <div className="w-full h-full grid md:grid-cols-2 items-center container mx-auto ">
            <div></div>
            <div className="flex flex-col gap-4 px-4 items-start" data-aos="zoom-in-right" data-aos-duration="2000" data-aos-easing="ease-out-back">
            
                <h1 className="text-4xl mb-2">Contact me</h1>
                <p className="text-2xl">
                    If you're looking for a developer with a wide range of expertise, a strong educational foundation,
                    and a genuine enthusiasm for technology, 
                    I would be thrilled to collaborate with you on your next project. 
                    Let's turn ideas into reality and create exceptional digital experiences together.
                </p>
                <p className="text-2xl">
                    Whether you are a developer or a company, I am always open to new opportunities. 
                    Please feel free to reach out to me personally with the info in the contact section or by using the contact form on the website.
                </p>
                
            </div>
        </div>
    </>
}

export default function Subpage(props)
{
    if(localStorage.getItem("darkMode") === null)
        localStorage.setItem("darkMode", false)
    const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true")

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
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
            {
            darkMode ?
            <style>
                {
                    `
                body::-webkit-scrollbar-track {background: #090e0e;}
                body::-webkit-scrollbar-thumb {background: #502c1d;}
                body::-webkit-scrollbar-thumb:hover {background: #e65831;}
                    `
                }
            </style>
            :
            <style>
                {
                    `
                body::-webkit-scrollbar-track {background: #f6f1f1;}
                body::-webkit-scrollbar-thumb {background: #AFD3E2;}
                body::-webkit-scrollbar-thumb:hover {background: #19A7CE;}
                    `
                }
            </style>
            }
            <div className={`relative bg-white`}>
                <div className={`fixed flex items-center w-full p-5 gap-10 z-20  ${darkMode ? "invert" : ""}`}>
                    <a href={url.replace("#/MoreAboutMe","")}><span className="material-symbols-outlined text-3xl text-body hover:text-secondary transition-all duration-300">start</span></a>
                    <div style={{flex: 1}}></div>
                    <a href={url.replace("#/MoreAboutMe","")}><p className="text-3xl text-body SpecialFont hover:text-secondary transition-all duration-300">Bojan Ivanovski</p></a>
                </div>
                <div className={`w-full h-full z-0 fixed ${darkMode ? "invert" : ""} `}>
                    {slides[SlideCount]}

                    <h1 className="absolute bottom-0 left-3 text-[40px] text-body" >ABOUT ME</h1>
                </div>
            </div>
        </>
        
    )
}