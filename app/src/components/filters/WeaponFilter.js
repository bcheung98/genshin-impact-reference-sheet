import React from "react";

let swordIcon = require("../../assets/weapons/Weapon-class-sword-icon.png").default;
let claymoreIcon = require("../../assets/weapons/Weapon-class-claymore-icon.png").default;
let polearmIcon = require("../../assets/weapons/Weapon-class-polearm-icon.png").default;
let bowIcon = require("../../assets/weapons/Weapon-class-bow-icon.png").default;
let catalystIcon = require("../../assets/weapons/Weapon-class-catalyst-icon.png").default;

const WeaponFilter = (props) => {
    return (
        <div>
            <div className="filter">
                <img className="filter-off" id="sword-button" src={swordIcon} alt="Sword" onClick={props.setFilters} />
                <p className="material-tooltip">Sword</p>
            </div>
            <div className="filter">
                <img className="filter-off" id="claymore-button" src={claymoreIcon} alt="Claymore" onClick={props.setFilters} />
                <p className="material-tooltip">Claymore</p>
            </div>
            <div className="filter">
                <img className="filter-off" id="polearm-button" src={polearmIcon} alt="Polearm" onClick={props.setFilters} />
                <p className="material-tooltip">Polearm</p>
            </div>
            <div className="filter">
                <img className="filter-off" id="bow-button" src={bowIcon} alt="Bow" onClick={props.setFilters} />
                <p className="material-tooltip">Bow</p>
            </div>
            <div className="filter">
                <img className="filter-off" id="catalyst-button" src={catalystIcon} alt="Catalyst" onClick={props.setFilters} />
                <p className="material-tooltip">Catalyst</p>
            </div>
        </div>
    )
}

export default WeaponFilter;
