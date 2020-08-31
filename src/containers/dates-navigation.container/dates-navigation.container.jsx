import React, { useState, useEffect }  from "react";
import { useLocation as location } from "react-router-dom";

import { generateDatesNavigation, sixDays, sevenDays } from "../../utils/navigationDates";


import { DatesNavigationView } from "../../components/dates-navigation-view.component/dates-navigation-view.component";

export const DatesNavigation = () => {
    const { search } = location();
    const [datesSelection, setDatesSelection] = useState([]);

    useEffect(() => {
        setDatesSelection(generateDatesNavigation(search))
    }, [search])

    const navigateDates = (e) => {
        const { id } = e.target;

        const nextPeriod = datesSelection[2];
        const prevPeriod = datesSelection[0];

        const newNextWeek = new Date(new Date(nextPeriod.to).getTime() + sevenDays);
        const newNextWeekMinusSix = new Date(new Date(newNextWeek).getTime() - sixDays);

        const newPrevWeek = new Date(new Date(prevPeriod.to).getTime() - sevenDays);
        const newPrevWeekMinusSix = new Date(new Date(newPrevWeek).getTime() - sixDays);

        setDatesSelection(prevSelection => 
            id === "prev"?
            [{from: newPrevWeekMinusSix.toDateString().slice(4), to: newPrevWeek.toDateString().slice(4)}, ...prevSelection].slice(0,3):
            [...prevSelection, {from: newNextWeekMinusSix.toDateString().slice(4), to: newNextWeek.toDateString().slice(4)}].slice(-3)
        )
    }

    return (
        <DatesNavigationView 
            navigateDates={navigateDates}
            datesSelection={datesSelection}
            searchQuery={search}
        />
    )
}



