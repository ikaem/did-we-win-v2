import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import classes from "./competition-title-bar.module.css";

export const CompetitionTitleBar = (props) => {
    const {
        league_id: leagueId,
        country_name: countryName,
        league_name: leagueName,
        country_logo: countryLogo } = props; 

    return (
    <Link to={`/standings/${leagueId}`}>
        <div className={classes.competitionTitleBar}>
            {countryLogo && <img 
                className={classes.competitionCountryFlag}
                src={countryLogo} 
                alt={`${countryName} flag`} />}
            <div className={classes.competitionTitleNameBox}>
                <h2>
                    <span>{countryName}</span>
                    <span> - </span>
                    <span>{leagueName}</span>
                </h2>
            </div>
        </div>
    </Link>
    )
}

CompetitionTitleBar.propTypes = {
    league_id: PropTypes.string.isRequired,
    country_name: PropTypes.string.isRequired,
    league_name: PropTypes.string.isRequired,
    country_logo: PropTypes.string,
}