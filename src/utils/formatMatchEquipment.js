export const toMatchDateFormat = (matchDate) => {
    const matchDateFormat = new Date(matchDate).toDateString().slice(4, 10);
    return matchDateFormat;
}

export const toMatchStatus = (matchStatus, matchTime) => {
    if(matchStatus === "Finished") return "FT";
    if(matchStatus === "Half Time") return "HT"
    if(Number(matchStatus)) return matchStatus;
    if(!matchStatus) return matchTime;
    return matchStatus;
};

export const styleMatchStatus = (matchLive, classes) => {
    return Number(matchLive) && classes.liveMatch;
}