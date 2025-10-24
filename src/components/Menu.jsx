import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Menu.css"
import Home from "../pages/Home"
import About from "../pages/About"


export default function Menu(){
    return (
        <>
            <div className="menu-wrapper">
                <div className="headline">
                    <h2>Q1ngX1's Blog</h2>
                </div>
                <div className="nav-links">
                    <nav>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            <li><Link className="link-btn link-btn--ghost" to="/">Home</Link></li>
                            <li><Link className="link-btn link-btn--ghost" to="/about">About</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}