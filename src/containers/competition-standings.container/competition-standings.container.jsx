import React, { useState, useEffect } from "react";
import { useParams as params } from "react-router-dom";
import { Helmet } from "react-helmet";

import classes from "./competition-standings.module.css";
import { getStandings } from "../../services/did-we-win-api";

import { CompetitionTitleBar } from "../../elements/competition-title-bar.element/competition-title-bar.element";
import { StandingsTable } from "../../components/standings-table.component/standings-table.component";

export const CompetitionStandings = () => {
    const { id: competitionId } = params();
    const [titleBarData, setTitleBarData] = useState("");
    const [tableData, setTableData] = useState("");

    useEffect(() => {
        getStandings(competitionId)
        .then(data => {
            setTitleBarData(data.selectedTitleBarData);
            setTableData(data.selecteStandingsData);
        })
        .catch(console.log);
    }, []);

    return (
    <section className={classes.competitionStandings}>
        {titleBarData && <CompetitionTitleBar {...titleBarData} />}
        {tableData && <StandingsTable tableData={tableData}/>}
        <Helmet>
            {titleBarData && <title>{`${titleBarData.country_name} - ${titleBarData.league_name}`} | Did We Win?</title>}
        </Helmet>
    </section>
    )
}