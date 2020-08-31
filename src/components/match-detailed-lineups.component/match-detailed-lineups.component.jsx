import React from "react";
import PropTypes from "prop-types";

import classes from "./match-detailed-lineups.module.css";
import { checkPlayerEvents } from "../../utils/renderMatchEventData";

export const MatchDetailedLineups = ({homeTeam, awayTeam, matchEvents}) => {
    const { 
        formation: homeFormation, 
        lineup: homeLineup, 
        substitutes: homeSubstitutes, 
        coach: homeCoach } = homeTeam;

    const { 
        formation: awayFormation, 
        lineup: awayLineup, 
        substitutes: awaySubstitutes, 
        coach: awayCoach } = awayTeam;

    return (
    <div className={classes.lineups}>
        <ul className={`${classes.firstTeam} ${classes.homeLineup}`}>
            {homeLineup.map(player => {
                return (
                    <li key={`home-${player.lineup_number}`}>
                        <span className={classes.playerNumber}>{player.lineup_number}</span>
                        <span>{player.lineup_player}</span>
                        <span className={classes.playerEventsIcons}>
                            {player && matchEvents && checkPlayerEvents(player.lineup_player, matchEvents)}
                        </span>
                    </li>
                )
            })}
        </ul>

        <ul className={`${classes.firstTeam} ${classes.awayLineup}`}>
            {awayLineup.map(player => {
                return (
                    <li key={`away-${player.lineup_number}`}>
                        <span>{player.lineup_player}</span>
                        <span className={classes.playerNumber}>{player.lineup_number}</span>
                        <span className={classes.playerEventsIcons}>
                            {player && matchEvents && checkPlayerEvents(player.lineup_player, matchEvents)}
                        </span>
                    </li>
                )
            })}
        </ul>

        <p className={classes.homeCoach}>Coach: 
            <span> {awayCoach.length? homeCoach[0].lineup_player: ""}</span>
        </p>
        <p className={classes.awayCoach}>Coach: 
            <span> {awayCoach.length? awayCoach[0].lineup_player: ""}</span>
        </p>

        <p className={classes.homeFormation}>Formation: 
            <span> {homeFormation}</span>
        </p>
        <p className={classes.awayFormation}>Formation: 
            <span> {awayFormation}</span>
        </p>

        <span>Substitutes</span>

        <ul className={`${classes.substitutes} ${classes.homeLineup}`}>
            {homeSubstitutes.map(player => {
                return (
                    <li key={`home-${player.lineup_number}`}>
                        <span className={classes.playerNumber}>{player.lineup_number}</span>
                        <span>{player.lineup_player}</span>
                        <span className={classes.playerEventsIcons}>
                            {player && matchEvents && checkPlayerEvents(player.lineup_player, matchEvents)}
                        </span>
                    </li>
                )
            })}
        </ul>
        <ul className={`${classes.substitutes} ${classes.awayLineup}`}>
            {awaySubstitutes.map(player => {
                return (
                    <li key={`away-${player.lineup_number}`}>
                        <span>{player.lineup_player}</span>
                        <span className={classes.playerNumber}>{player.lineup_number}</span>
                        <span className={classes.playerEventsIcons}>
                            {player && matchEvents && checkPlayerEvents(player.lineup_player, matchEvents)}
                        </span>
                    </li>
                )
            })}
        </ul>
    </div>
    )
}

MatchDetailedLineups.propTypes = {
    homeTeam: PropTypes.shape({
        formation: PropTypes.string,
        lineup: PropTypes.arrayOf(PropTypes.shape({
            lineup_player: PropTypes.string,
            lineup_number: PropTypes.string,
            lineup_position: PropTypes.string,
        })).isRequired,
        substitutes: PropTypes.arrayOf(PropTypes.shape({
            lineup_player: PropTypes.string,
            lineup_number: PropTypes.string,
            lineup_position: PropTypes.string,
        })).isRequired,
        coach: PropTypes.arrayOf(PropTypes.shape({
            lineup_player: PropTypes.string,
            lineup_number: PropTypes.string,
            lineup_position: PropTypes.string,
        })).isRequired,
    }).isRequired,
    awayTeam: PropTypes.shape({
        formation: PropTypes.string,
        lineup: PropTypes.arrayOf(PropTypes.shape({
            lineup_player: PropTypes.string,
            lineup_number: PropTypes.string,
            lineup_position: PropTypes.string,
        })).isRequired,
        substitutes: PropTypes.arrayOf(PropTypes.shape({
            lineup_player: PropTypes.string,
            lineup_number: PropTypes.string,
            lineup_position: PropTypes.string,
        })).isRequired,
        coach: PropTypes.arrayOf(PropTypes.shape({
            lineup_player: PropTypes.string,
            lineup_number: PropTypes.string,
            lineup_position: PropTypes.string,
        })).isRequired,
    }).isRequired,
    matchEvents: PropTypes.arrayOf(PropTypes.shape({
        time: PropTypes.string,
        event: PropTypes.string,
        homePlayer: PropTypes.string,
        awayPlayer: PropTypes.string,
        info: PropTypes.string,
        details: PropTypes.string,
        id: PropTypes.number
    })).isRequired

}