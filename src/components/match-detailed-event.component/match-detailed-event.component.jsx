import React from "react";
import PropTypes from "prop-types";

import classes from "./match-detailed-event.module.css";
import {
    renderEitherP1,
    renderEitherP1Icon,
    renderEitherP2,
    renderEitherP2Icon,
    renderScore } from "../../utils/renderMatchEventData";

export const MatchDetailedEvent = ({matchEvent}) => {
    const {
        time,
        event,
        homePlayer,
        awayPlayer,
        info,
        details } = matchEvent;

    return (
    <li className={classes.matchDetailedEvent}>
        <span className={classes.time}>{time}'</span>
        <span className={classes.homePlayer1}>{renderEitherP1(homePlayer, info)}</span>
        <span className={classes.homePlayer1EventIcon}>{renderEitherP1Icon(event, homePlayer)}
        </span>
        <span className={classes.homePlayer2}>{renderEitherP2(event, homePlayer, details)}</span>
        <span className={classes.homePlayer2EventIcon}>{renderEitherP2Icon(event, homePlayer)}</span>
        <span className={classes.score}>{renderScore(event, details)}</span>
        <span className={classes.awayPlayer1EventIcon}>{renderEitherP1Icon(event, awayPlayer)}</span>
        <span className={classes.awayPlayer1}>{renderEitherP1(awayPlayer, info)}</span>
        <span className={classes.awayPlayer2EventIcon}>{renderEitherP2Icon(event, awayPlayer)}</span>
        <span className={classes.awayPlayer2}>{renderEitherP2(event, awayPlayer, details)}</span>
    </li>
    );
}

MatchDetailedEvent.propTypes = {
    matchEvent: PropTypes.shape({
        time: PropTypes.string,
        event: PropTypes.string,
        homePlayer: PropTypes.string,
        awayPlayer: PropTypes.string,
        info: PropTypes.string,
        details: PropTypes.string,
        id: PropTypes.number
    }).isRequired
}