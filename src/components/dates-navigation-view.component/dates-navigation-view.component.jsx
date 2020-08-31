import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import classes from "./dates-navigation-view.module.css";
import { getURLFromNavDates, styleCurrentNavDate } from "../../utils/navigationDates";

export const DatesNavigationView = ({navigateDates, datesSelection, searchQuery}) => {

    return (
    <nav className={classes.datesNavigationView}>
        <ul>
            <li><i id="prev" onClick={navigateDates} className="fa fa-angle-left fa-2x"/></li>
            {datesSelection && datesSelection.map(date => 
                <li key={date.to}>
                    <Link 
                        className={`${classes.navDateItem} ${styleCurrentNavDate(searchQuery, date.from, date.to, classes)}`}
                        to={getURLFromNavDates(date.from, date.to)}>
                        <span>{date.from.slice(0,6)}</span>
                        <span> - </span>
                        <span>... to </span>
                        <span>{date.to.slice(0,6)}</span>
                    </Link>
                </li>
            )}
            <li><i id="next" onClick={navigateDates} className="fa fa-angle-right fa-2x"/></li>
        </ul>
    </nav>
    );
}

DatesNavigationView.propTypes = {
    navigateDates: PropTypes.func.isRequired,
    datesSelection: PropTypes.arrayOf(PropTypes.shape({
        from: PropTypes.string,
        to: PropTypes.string
    })).isRequired,
    searchQuery: PropTypes.string
}