export const competitionSelectedData = (competitions) => {
    const selectedData = competitions.map(competition => {
        const { league_logo, league_season, country_id, ...rest } = competition;
        return rest;
    });
    return selectedData;
}

export const matchBriefSelectedData = (matches) => {
    const selectedData = matches.length > 1 && matches.map(({
        match_id,
        match_hometeam_name, 
        match_awayteam_name, 
        match_hometeam_score, 
        match_awayteam_score, 
        match_date, 
        match_time, 
        match_status, 
        match_live }) => ({
        match_id,
        match_hometeam_name, 
        match_awayteam_name, 
        match_hometeam_score, 
        match_awayteam_score, 
        match_date, 
        match_time, 
        match_status, 
        match_live     
        })
    );
    return selectedData || [];
}

export const matchDetailedSelectedData = (match) => {


    const selectedTitleBarData = {
        league_id: match.league_id,
        country_name: match.country_name,
        league_name: match.league_name,
        country_logo: match.country_logo,
    }

    const selectedSummaryData = {
        matchDate: new Date(match.match_date).toDateString().slice(4),
        matchStatus: match.match_status,
        matchTime: match.match_time,
        matchHometeamName: match.match_hometeam_name,
        matchHometeamScore: match.match_hometeam_score,
        matchAwayteamName: match.match_awayteam_name,
        matchAwayteamScore: match.match_awayteam_score,
        matchHometeamHalftimeScore: match.match_hometeam_halftime_score,
        matchAwayteamHalftimeScore: match.match_awayteam_halftime_score,
        matchLive: match.match_live,
        matchRound: match.match_round.slice(5),
        matchStadium: match.match_stadium,
        matchReferee: match.match_referee,
        teamHomeBadge: match.team_home_badge,
        teamAwayBadge: match.team_away_badge
    };

    const selectedEventsData = ({goalscorer, cards, substitutions}) => {
        const goals = goalscorer.map(goal => ({
             time: goal.time,
             event: "goal",
             homePlayer: goal.home_scorer,
             awayPlayer: goal.away_scorer,
             info: goal.info,
             details: goal.score,
        }));
        const carded = cards.map(card => ({
            time: card.time,
            event: card.card,
            homePlayer: card.home_fault,
            awayPlayer: card.away_fault,
            info: card.info,
            details: "",
        }));
        const substituted = Object.entries(substitutions).map(team => {
            return team[1].map(sub => ({
                time: sub.time,
                event: "substitution",
                homePlayer: team[0] === "home"? `${sub.substitution.split("|")[0].trim()}`: "",
                awayPlayer: team[0] === "away"? `${sub.substitution.split("|")[0].trim()}`: "",
                info: "",
                details: `${sub.substitution.split("|")[1].trim()}`
            }));
        }).flat();
        const matchEvents = [...goals, ...carded, ...substituted].map((event, index) => ({
            ...event,
            id: index + 1,
        })).sort((a, b) => {
            return a.time.split("+")[0] - b.time.split("+")[0]
        });
        return matchEvents;
    };

    const selectedLineupsData = {
        homeTeam: {
            formation: match.match_hometeam_system,
            lineup: match.lineup.home.starting_lineups.sort((a, b) => a.lineup_number - b.lineup_number) || [],
            substitutes: match.lineup.home.substitutes.sort((a, b) => a.lineup_number - b.lineup_number) || [],
            coach: match.lineup.home.coach,
        },
        awayTeam: {
            formation: match.match_awayteam_system,
            lineup: match.lineup.away.starting_lineups.sort((a, b) => a.lineup_number - b.lineup_number) || [],
            substitutes: match.lineup.away.substitutes.sort((a, b) => a.lineup_number - b.lineup_number) || [],
            coach: match.lineup.away.coach,
        },
    }

    const selectedStatsData = match.statistics.map((stat, index) => ({
        id: index + 1,
        homeStat: stat.home,
        awayStat: stat.away,
        statType: stat.type,
        homeIncrementArray: Array(Math.round(Number(stat.home.split("%")[0]) / (Number(stat.home.split("%")[0]) + Number(stat.away.split("%")[0])) * 10) || 0).fill().map((val, index) => val = index + 1),
        awayIncrementArray: [...Array(Math.round(Number(stat.away.split("%")[0]) / (Number(stat.home.split("%")[0]) + Number(stat.away.split("%")[0])) * 10) || 0)].fill().map((val, index) => val = index + 1),
    }));

    return {selectedTitleBarData, selectedSummaryData, selectedEventsData: selectedEventsData(match), selectedLineupsData, selectedStatsData};
};

export const competitionStandingsSelectedData = (standings) => {
    const selectedTitleBarData = {
       league_id: standings[0].league_id,
       country_name: standings[0].country_name,
       league_name: standings[0].league_name,
    }

    const selecteStandingsData = standings.map(team => ({
        teamName: team.team_name,
        currentPosition: team.overall_league_position,
        currentPoints: team.overall_league_PTS,
        matchesPlayed: team.overall_league_payed,
        goalDifference: team.overall_league_GF - team.overall_league_GA,
        matchesWon: team.overall_league_W,
        matchesLost: team.overall_league_L,
        matchesDraw: team.overall_league_D,
    }));

    return {selectedTitleBarData, selecteStandingsData}
}