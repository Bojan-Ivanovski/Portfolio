import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import "./index.css";

function MainPage()
{
    return (
    <Layout>
        <Routes>
            <Route index element={<Home></Home>} />
            <Route path="About-me" element={<AboutMe></AboutMe>} />
            <Route path="Projects" element={<h1>Projects</h1>} />
            <Route path="Contact" element={<h1>Contact</h1>} />
        </Routes>
    </Layout>)
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/*" element={<MainPage></MainPage>}/>
            <Route path="Subpage/*" element={<h1>Subpage</h1>}/>
        </Routes>
    </BrowserRouter>
)