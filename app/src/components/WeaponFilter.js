import React from "react";

let swordIcon = require("../assets/weapons/Weapon-class-sword-icon.png").default;
let claymoreIcon = require("../assets/weapons/Weapon-class-claymore-icon.png").default;
let polearmIcon = require("../assets/weapons/Weapon-class-polearm-icon.png").default;
let bowIcon = require("../assets/weapons/Weapon-class-bow-icon.png").default;
let catalystIcon = require("../assets/weapons/Weapon-class-catalyst-icon.png").default;

const WeaponFilter = (props) => {
    return (
        <div className="filter">
            <img className="filter-off" id="sword-button" src={swordIcon} alt="Sword" onClick={props.setWeaponFilters} />
            <img className="filter-off" id="claymore-button" src={claymoreIcon} alt="Claymore" onClick={props.setWeaponFilters} />
            <img className="filter-off" id="polearm-button" src={polearmIcon} alt="Polearm" onClick={props.setWeaponFilters} />
            <img className="filter-off" id="bow-button" src={bowIcon} alt="Bow" onClick={props.setWeaponFilters} />
            <img className="filter-off" id="catalyst-button" src={catalystIcon} alt="Catalyst" onClick={props.setWeaponFilters} />
        </div>
    )
}

export default WeaponFilter;