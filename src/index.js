import React, {useState } from "react";
import ReactDOM from "react-dom/client"
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import MoreAboutMe from "./SubpageLayout/SubpageLayout";
import Catalog from "./Catalog/Catalog";
import "./index.css";
import "./Backgrounds/Background1.css"
import "./Backgrounds/Background2.css"

function MainPage()
{
    const [PageCount, setPageCount] = useState(0)
    const goToPage = (n) => {setPageCount(n)}
    const pages = [<Home></Home>, <AboutMe></AboutMe>, <Projects></Projects>,<Contact></Contact>]
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
    <Layout pCount= {PageCount} onThis={goToPage}>
        {pages[PageCount]}
    </Layout>)
}


ReactDOM.createRoot(document.getElementById("root")).render(
    <HashRouter>
        <Routes>
            <Route path="/*" element={<MainPage></MainPage>}/>
            <Route path="MoreAboutMe" element={<MoreAboutMe></MoreAboutMe>}/>
            <Route path="Projects" element={<Catalog></Catalog>}/>
        </Routes>
    </HashRouter>
)