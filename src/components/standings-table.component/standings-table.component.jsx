import React from "react";
import PropTypes from "prop-types";

import classes from "./standings-table.module.css";

export const StandingsTable = ({tableData}) => {

    return (
    <div className={classes.standingsTable}>
        <h2>Standings Table</h2>
        <ul className={classes.table}>

            <li className={classes.tableLegend}>
                <span>#</span>
                <span>Team Name</span>
                <span>PTS</span>
                <span>MP</span>
                <span>GD</span>
                <span>W</span>
                <span>L</span>
                <span>D</span>
            </li>

            {tableData.map(team => {
                return (
                <li key={team.teamName}>
                    <span>{team.currentPosition}</span>
                    <span>{team.teamName}</span>
                    <span>{team.currentPoints}</span>
                    <span>{team.matchesPlayed}</span>
                    <span>{team.goalDifference}</span>
                    <span>{team.matchesWon}</span>
                    <span>{team.matchesLost}</span>
                    <span>{team.matchesDraw}</span>
                </li>
                )
            })}
        </ul>
    </div>
    )
}

StandingsTable.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.shape({
        teamName: PropTypes.string,
        currentPosition: PropTypes.string,
        currentPoints: PropTypes.string,
        matchesPlayed: PropTypes.string,
        goalDifference: PropTypes.number,
        matchesWon: PropTypes.string,
        matchesLost: PropTypes.string,
        matchesDraw: PropTypes.string,
    })).isRequired
}