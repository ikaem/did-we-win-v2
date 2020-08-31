import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import classes from "./competition-match-brief.module.css";
import { toMatchDateFormat, toMatchStatus, styleMatchStatus } from "../../utils/formatMatchEquipment";

export const CompetitionMatchBrief = (props) => {
    const { 
        match_id: matchId,
        match_hometeam_name: matchHomeTeamName, 
        match_awayteam_name: matchAwayTeamName, 
        match_hometeam_score: matchHomeTeamScore, 
        match_awayteam_score: matchAwayTeamScore, 
        match_date: matchDate, 
        match_time: matchTime, 
        match_status: matchStatus, 
        match_live: matchLive
    } = props;

    return (
    // TODO - Link need to take to match details - use id for it
    <Link to={`/match/${matchId}`}>
        <article className={classes.competitionMatchBrief}>
            <div className={classes.matchBriefTime}>
                <span>{toMatchDateFormat(matchDate)}</span>
                <span className={styleMatchStatus(matchLive, classes)}>
                    {toMatchStatus(matchStatus, matchTime)}
                </span>
            </div>
            <div className={classes.matchBriefTeams}>
                <span>{matchHomeTeamName}</span>
                <span>{matchHomeTeamScore}</span>
                <span>{matchAwayTeamName}</span>
                <span>{matchAwayTeamScore}</span>
                <span> - </span>
            </div>
        </article>
    </Link>
    )
}

CompetitionMatchBrief.propTypes = {
    match_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    match_hometeam_name: PropTypes.string.isRequired,
    match_awayteam_name: PropTypes.string.isRequired, 
    match_hometeam_score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, 
    match_awayteam_score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, 
    match_date: PropTypes.string.isRequired,
    match_time: PropTypes.string.isRequired, 
    match_status: PropTypes.string.isRequired, 
    match_live: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}