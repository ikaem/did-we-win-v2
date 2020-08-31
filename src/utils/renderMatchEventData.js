import React from "react";

import {ReactComponent as SubIn} from "../assets/fa-icons/sub-in.svg";
import {ReactComponent as SubOut} from "../assets/fa-icons/sub-out.svg";
import {ReactComponent as RedCard} from "../assets/fa-icons/red-card.svg";
import {ReactComponent as YellowCard} from "../assets/fa-icons/yellow-card.svg";
import {ReactComponent as Goal} from "../assets/fa-icons/futbol-solid.svg";

export const renderEitherP1 = (eitherPlayer, info) => {
    if(eitherPlayer && info) return <> {eitherPlayer} ({info}) </>;
    if(eitherPlayer) return eitherPlayer;
}
export const renderEitherP1Icon = (event, eitherPlayer1) => {
    if(event === "goal" && eitherPlayer1) return <Goal style={{width:"20px"}}/>
    if(event === "yellow card" && eitherPlayer1) return <YellowCard style={{width:"20px"}}/>
    if(event === "red card" && eitherPlayer1) return <RedCard style={{width:"20px"}}/>
    if(event === "substitution" && eitherPlayer1) return <SubOut style={{width:"20px"}}/>
}
export const renderEitherP2 = (event, eitherPlayer1, details) => {
    if(event === "substitution" && eitherPlayer1) return details;
}
export const renderEitherP2Icon = (event, eitherPlayer) => {
    if(event === "substitution" && eitherPlayer) return <SubIn style={{width:"20px"}}/>
}
export const renderScore = (event, details) => {
    if(event === "goal") return details;
}

export const checkPlayerEvents = (player, matchEvents) => {
    return matchEvents.map(matchEvent => {
        if(player.split("(")[0].trim() === matchEvent.homePlayer || player.split("(")[0].trim() === matchEvent.awayPlayer){
            if(matchEvent.event === "yellow card") return (
                <YellowCard key={matchEvent.id}/>)
            if(matchEvent.event === "red card") return (
                <RedCard key={matchEvent.id}/>)
            if(matchEvent.event === "goal") return (
                <Goal key={matchEvent.id}/>)
            if(matchEvent.event === "substitution") return (
                <SubOut key={matchEvent.id}/>)
        }
        else if(player === matchEvent.details) return (
            <SubIn key={matchEvent.id}/>)
    });
}