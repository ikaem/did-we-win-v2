import React from "react";

import classes from "./logo-home.module.css";
import { Link } from "react-router-dom";

export const LogoHome = () => {
    return (
    <div className={classes.logoHome}>
        <h1>DID WE WIN?</h1>
        <nav className={classes.homeNav}>
            <ul>
                <li><Link to="/matches">HOME</Link></li>
            </ul>
        </nav>
    </div>
    )
}