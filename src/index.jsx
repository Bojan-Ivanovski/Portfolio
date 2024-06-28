import React, {useState } from "react";
import ReactDOM from "react-dom/client"
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import MoreAboutMe from "./SubpageLayout";
import Catalog from "./Catalog";
import Aos from "aos";

import "./index.css"
import "./Backgrounds/Background1.css"
import "./Backgrounds/Background2.css"


function MainPage()
{
    if(localStorage.getItem("darkMode") === null)
        localStorage.setItem("darkMode", false)
    const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true")

    const [PageCount, setPageCount] = useState(0)
    const goToPage = (n) => {setPageCount(n)}
    const pages = [<Home setMode={setDarkMode}></Home>, <AboutMe></AboutMe>, <Projects></Projects>,<Contact></Contact>]
    const bar = (window.innerHeight /  document.body.offsetHeight ) * window.innerHeight
    const height = (document.querySelector('body').scrollHeight) / 4;
    window.addEventListener('scroll', () => {
        if(window.scrollY > height*3  - bar)
            goToPage(3)
        else if(window.scrollY > height*2  - bar)
            goToPage(2)
        else if(window.scrollY > height*1  - bar)
            goToPage(1)
        else
            goToPage(0)
    })

    return (
    <Layout pCount= {PageCount} onThis={goToPage} mode={darkMode}>
        {pages[PageCount]}
    </Layout>)
}


Aos.init()
ReactDOM.createRoot(document.getElementById("root")).render(
    <HashRouter>
        <Routes>
            <Route path="/*" element={<MainPage></MainPage>}/>
            <Route path="MoreAboutMe" element={<MoreAboutMe></MoreAboutMe>}/>
            <Route path="Projects" element={<Catalog></Catalog>}/>
        </Routes>
    </HashRouter>
)