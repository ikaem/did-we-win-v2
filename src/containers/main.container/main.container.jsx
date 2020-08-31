import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import classes from "./main.module.css";
import { getCompetitions } from "../../services/did-we-win-api";

import { Competition } from "../competition.container/competition.container";
import { MatchDetailed } from "../match-detailed.component/match-detailed.component";
import { CompetitionStandings } from "../competition-standings.container/competition-standings.container";

export const Main = () => {
    const [competitions, setCompetitions] = useState([]);

    useEffect(() => {
        getCompetitions()
        .then(resCompetitions => {
            setCompetitions(resCompetitions)})
        .catch(console.log);
    }, []);

    return (
    <main className={classes.main}>
        <Switch>
            <Route exact path="/matches">
                {competitions && competitions.map(competition => 
                    <Competition key={competition.league_id} {...competition} />
                )}
            </Route>
            <Route path="/match/:id">
                <MatchDetailed/>
            </Route>
            <Route path="/standings/:id">
                <CompetitionStandings />
            </Route>
        </Switch>
    </main>
    )
}