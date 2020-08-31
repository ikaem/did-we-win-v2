export const oneHour = 3600 * 1000;
export const sixDays = 518400 * 1000;
export const sevenDays = 604800 * 1000;

// competition.container
export const getMatchDatesFromURL = (search) => {
    const [from, to] = new URLSearchParams(search).values();
    if(!from && !to ) return (
        [new Date(new Date().getTime() - sixDays).toISOString().split("T")[0], 
        new Date().toISOString().split("T")[0]]
    )
    return [from, to];
}
// dates-navigation.container
export const generateDatesNavigation = (search) => {
    const [from, to] = new URLSearchParams(search).values();

    const now = (!new Date(from).getTime() || !new Date(to).getTime())? new Date().getTime(): new Date(to).getTime();

    const today = new Date(now);
    const todayMinusSix = new Date(new Date(today).getTime() - sixDays);

    const nextWeek = new Date(new Date(today).getTime() + sevenDays);
    const nextWeekMinusSix = new Date(new Date(nextWeek).getTime() - sixDays);


    const prevWeek = new Date(new Date(today).getTime() - sevenDays);
    const prevWeekMinusSix = new Date(new Date(prevWeek).getTime() - sixDays);

    return [
        {from: prevWeekMinusSix.toDateString().slice(4), to: prevWeek.toDateString().slice(4)}, 
        {from: todayMinusSix.toDateString().slice(4), to: today.toDateString().slice(4)}, 
        {from: nextWeekMinusSix.toDateString().slice(4), to: nextWeek.toDateString().slice(4)}];
}
// dates-navigation-view.component
export const getURLFromNavDates = (fromDate, toDate) => {
    const fromDateISO = new Date(new Date(fromDate).getTime() + oneHour*2).toISOString().split("T")[0];
    const toDateISO = new Date(new Date(toDate).getTime() + oneHour*2).toISOString().split("T")[0];
    return `/matches?fromDate=${fromDateISO}&toDate=${toDateISO}`
}
// dates-navigation-view.component
export const styleCurrentNavDate = (search, navFrom, navTo, classes) => {
    const [from, to] = new URLSearchParams(search).values();
    const timeFromURL = new Date(from).toDateString();
    const timeToURL = new Date(to).toDateString();
    const timeFromNav = new Date(navFrom).toDateString();
    const timeToNav = new Date(navTo).toDateString();
    const today = new Date().toDateString();

    if(!new Date(timeFromURL).getTime() || !new Date(timeToURL).getTime()){
        if(today === timeToNav) return classes.currentDateNav
    }

    else {
        if(timeFromURL === timeFromNav && timeToURL === timeToNav) return classes.currentDateNav;
    }
}

