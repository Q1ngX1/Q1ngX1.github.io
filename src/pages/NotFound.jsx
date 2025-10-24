import React from "react";
import Home from "../pages/Home"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


export default function NotFound() {
    return (
        <>
            <h1>404</h1>
            <h3>Page not Found</h3>
            <Link className="link-btn link-btn--primary" to="/">Return home</Link>
        </>
    );
};