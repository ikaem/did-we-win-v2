import React from "react";

import { LogoHome } from "../logo-home.component/logo-home.component";
import { DatesNavigation } from "../../containers/dates-navigation.container/dates-navigation.container";

export const Header = () => {

    return (
    <header>
        <LogoHome />
        <DatesNavigation />
    </header>
    )
}