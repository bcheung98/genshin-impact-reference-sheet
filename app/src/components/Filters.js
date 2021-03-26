import React from "react";
import Collapsible from "react-collapsible";
import ElementFilter from "./filters/ElementFilter";
import WeaponFilter from "./filters/WeaponFilter";
import TalentFilter from "./filters/TalentFilter";
import BossMatFilter from "./filters/BossMatFilter";

const Filters = (props) => {
    return (
        <Collapsible trigger="Show Filters" triggerWhenOpen="Hide Filters">
            <div className="filter-container">
                <div className="filter-bar">
                    <ElementFilter setFilters={props.elementFilters} />
                    <WeaponFilter setFilters={props.weaponFilters} />
                </div>
                <div className="filter-bar">
                    <TalentFilter setFilters={props.talentFilters} />
                    <BossMatFilter setFilters={props.bossMatFilters} />
                </div>
            </div>
        </Collapsible>
    )
}

export default Filters;