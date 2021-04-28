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
                <ElementFilter onClick={props.onClick} />
                <WeaponFilter onClick={props.onClick} />
                <TalentFilter onClick={props.onClick} />
                <BossMatFilter onClick={props.onClick} />
            </div>
        </Collapsible>
    )
}

export default Filters;