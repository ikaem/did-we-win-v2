import React from "react";
import { Link } from "react-router-dom";

import classes from "./footer.module.css";

export const Footer = () => {
    return (
    <footer>
        <section className={classes.footerLinks}>
            <Link to="/matches">ABOUT</Link>
            <Link to="/matches">CONTACT</Link>
            <p>
                Using recolored and modified nicely <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">Font Awesome</a> icons <a href="https://fontawesome.com/license" target="_blank" rel="noopener noreferrer">(CC BY 4.0)</a>
            </p>
        </section>
        <section className={classes.footerSocial}>
            <Link to="/matches"><i className="fa fa-facebook-square"/></Link>
            <Link to="/matches"><i className="fa fa-twitter-square"/></Link>
        </section>
    </footer>
    )
}