import React from "react";
import PropTypes from "prop-types";

import classes from "./match-detailed-summary.module.css";
import { styleMatchStatus } from "../../utils/formatMatchEquipment";

export const MatchDetailedSummary = ({
    matchDate,
    matchStatus,
    matchTime,
    matchHometeamName,
    matchHometeamScore,
    matchAwayteamName,
    matchAwayteamScore,
    matchHometeamHalftimeScore,
    matchAwayteamHalftimeScore,
    matchLive,
    matchRound,
    matchStadium,
    matchReferee,
    teamHomeBadge,
    teamAwayBadge }) => {
    
    return (
    <article className={classes.matchDetailedSummary}>
        <div className={classes.matchDetailedStatus}>
            <img src={teamHomeBadge} alt={`${matchHometeamName} badge`}/>
            <img src={teamAwayBadge} alt={`${matchAwayteamName} badge`}/>
            <span className={classes.currentScore}>{matchHometeamName}</span>
            <span className={classes.currentScore}>{matchHometeamScore}</span>
            <span className={classes.currentScore}>{matchAwayteamName}</span>
            <span className={classes.currentScore}>{matchAwayteamScore}</span>
            <span className={classes.currentScore}> - </span>
            <span 
                className={styleMatchStatus(matchLive, classes)}>
                Time: {matchStatus}
            </span>
            <span>HT Score: {matchHometeamHalftimeScore}-{matchAwayteamHalftimeScore}</span>
        </div>
        <div className={classes.matchDetailedInfo}>
            <div>
                <span>Match Day: {matchRound}</span>
                <span>{matchTime}, {matchDate}</span>
            </div>
            <hr/>
            <div>
                <span>Venue: {matchStadium}</span>
                <span>Referee: {matchReferee}</span>
            </div>
        </div>
    </article>
    );
}

MatchDetailedSummary.propTypes = {
    matchDate: PropTypes.string.isRequired,
    matchStatus: PropTypes.string.isRequired,
    matchTime: PropTypes.string.isRequired,
    matchHometeamName: PropTypes.string.isRequired,
    matchHometeamScore: PropTypes.string.isRequired,
    matchAwayteamName: PropTypes.string.isRequired,
    matchAwayteamScore: PropTypes.string.isRequired,
    matchHometeamHalftimeScore: PropTypes.string.isRequired,
    matchAwayteamHalftimeScore: PropTypes.string.isRequired,
    matchLive: PropTypes.string.isRequired,
    matchRound: PropTypes.string.isRequired,
    matchStadium: PropTypes.string.isRequired,
    matchReferee: PropTypes.string.isRequired,
    teamHomeBadge: PropTypes.string.isRequired,
    teamAwayBadge: PropTypes.string.isRequired
}