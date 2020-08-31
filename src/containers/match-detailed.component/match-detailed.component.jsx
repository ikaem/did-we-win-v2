import React, { useState, useEffect } from "react";
import { useParams as params } from "react-router-dom";
import { Helmet } from "react-helmet";

import { getMatch } from "../../services/did-we-win-api";

import { CompetitionTitleBar } from "../../elements/competition-title-bar.element/competition-title-bar.element";
import { MatchDetailedSummary } from "../../components/match-detailed-summary.component/match-detailed-summary.component";
import { MatchDetailedNavigation } from "../../components/match-detailed-navigation.component/match-detailed-navigation.component";
import { MatchDetailedEvent } from "../../components/match-detailed-event.component/match-detailed-event.component";
import { MatchDetailedLineups } from "../../components/match-detailed-lineups.component/match-detailed-lineups.component";
import { MatchDetailedStat } from "../../components/match-detailed-stat.component/match-detailed-stat.component";

export const MatchDetailed = () => {
	const { id: matchId } = params();

	const [currentReport, setCurrentReport] = useState("match events");
	const [titleBarData, setTitleBarData] = useState("");
	const [matchSummary, setMatchSummary] = useState("");
	const [matchEvents, setMatchEvents] = useState("");
	const [matchLineups, setMatchLineups] = useState("");
	const [matchStats, setMatchStats] = useState("");

	useEffect(() => {
		getMatch(matchId)
		.then(data => {
			setTitleBarData(data.selectedTitleBarData);
			setMatchSummary(data.selectedSummaryData);
			setMatchEvents(data.selectedEventsData);
			setMatchLineups(data.selectedLineupsData);
			setMatchStats(data.selectedStatsData);
		})
		.catch(console.log);
	},[])

    const renderReportOption = () => {
        if (currentReport === "match events" && matchEvents) return (
            <ul style={{padding: "5px 20px", borderRight: "1px solid #e0e0e0", borderLeft: "1px solid #e0e0e0"}}>
                {matchEvents.map(matchEvent => <MatchDetailedEvent 
					key={matchEvent.id} matchEvent={matchEvent}/>)}
			</ul>);
			
		if (currentReport === "match lineups" && matchLineups) return <MatchDetailedLineups {...matchLineups} matchEvents={matchEvents}/>;
		
        if (currentReport === "match statistics" && matchStats) return (
            <ul style={{padding: "5px 20px", borderRight: "1px solid #e0e0e0", borderLeft: "1px solid #e0e0e0"}}>
                {matchStats.map(matchStat => 
					<MatchDetailedStat 
						key={matchStat.id}
						{...matchStat}>
						{matchStat.statType}
					</MatchDetailedStat>)}
			</ul>);
	}
	
    return (
        <section>
            {titleBarData && <CompetitionTitleBar 
				{...titleBarData}
            />}
            {matchSummary && <MatchDetailedSummary {...matchSummary}/>}
            <MatchDetailedNavigation 
				setCurrentReport={setCurrentReport}
				currentReport={currentReport}/>
            {renderReportOption()}
			<Helmet>
				{matchSummary && <title>{`${matchSummary.matchHometeamName} - ${matchSummary.matchAwayteamName}`} | Did We Win?</title>}
			</Helmet>
        </section>
    )
}