import React, { useState, useEffect } from "react";
import { useLocation as location } from "react-router-dom";
import PropTypes from "prop-types";

import { getMatches } from "../../services/did-we-win-api";
import { getMatchDatesFromURL } from "../../utils/navigationDates";

import { CompetitionTitleBar } from "../../elements/competition-title-bar.element/competition-title-bar.element";
import { CompetitionMatchBrief } from "../../components/competition-match-brief.component/competition-match-brief.component";

export const Competition = (props) => {
    const { league_id: leagueId } = props; 
    const { search } = location();
    const [matches, setMatches] = useState([])
    const [fromToDates, setFromToDates] = useState();

    useEffect(() => {
        setFromToDates(getMatchDatesFromURL(search));
    },[search]);

    useEffect(() => {
        leagueId && fromToDates && getMatches(fromToDates[0], fromToDates[1], leagueId)
        .then(resMatches => setMatches(resMatches.reverse()))
        .catch(console.log);

    },[fromToDates]);

    return (
    <section>
        <CompetitionTitleBar {...props} />
        <ul>
        {matches && matches.map(match => 
            <li key={match.match_id}>
                <CompetitionMatchBrief {...match}/>
            </li>
        )}
        </ul>
    </section>
    )
}

Competition.propTypes = {
    country_name: PropTypes.string.isRequired,
    league_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    league_name: PropTypes.string.isRequired,
    country_logo: PropTypes.string.isRequired,
}