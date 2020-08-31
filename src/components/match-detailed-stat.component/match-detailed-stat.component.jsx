import React from "react";
import PropTypes from "prop-types";

import classes from "./match-detailed-stat.module.css";

export const MatchDetailedStat = ({
    homeStat, 
    awayStat,
    homeIncrementArray, 
    awayIncrementArray, 
    children}) => {

    return (
    <li className={classes.matchStat}>
        <div className={classes.homeStat}>
            <span className={`${homeStat == 0 && classes.zeroStatValue} ${classes.homeStatValue}`}>{homeStat}</span>
            {homeIncrementArray.map(incr => <span key={incr} className={classes.homeStatIncrement}></span>)}
        </div>
        <span className={classes.statName}>{children}</span>
        <div className={classes.awayStat}>
            <span className={`${awayStat == 0 && classes.zeroStatValue} ${classes.awayStatValue}`}>{awayStat}</span>
            {awayIncrementArray.map(incr => <span key={incr} className={classes.awayStatIncrement}></span>)}
        </div>
    </li>
    )
}

MatchDetailedStat.propTypes = {
    homeStat: PropTypes.string.isRequired,
    awayStat: PropTypes.string.isRequired,
    homeIncrementArray: PropTypes.array.isRequired,
    awayIncrementArray: PropTypes.array.isRequired,
    children: PropTypes.string,
}