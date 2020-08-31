import React from "react";
import PropTypes from "prop-types";

import classes from "./match-detailed-navigation.module.css";
import { styleCurrentReportOption } from "../../utils/styleMatchDetailedNav";


export const MatchDetailedNavigation = ({setCurrentReport, currentReport}) => {
    return (
    <ul className={classes.matchDetailedNavigation}>
        <li 
            onClick={() => setCurrentReport("match events")}
            className={styleCurrentReportOption(classes, currentReport, "match events")}>
            Events
        </li>
        <li 
            onClick={() => setCurrentReport("match lineups")}
            className={styleCurrentReportOption(classes, currentReport, "match lineups")}>
            Lineups
        </li>
        <li 
            onClick={() => setCurrentReport("match statistics")}
            className={styleCurrentReportOption(classes, currentReport, "match statistics")}>
            Statistics
        </li>
    </ul>
    );
}

MatchDetailedNavigation.propTypes = {
    currentReport: PropTypes.string.isRequired,
    setCurrentReport: PropTypes.func.isRequired,
}