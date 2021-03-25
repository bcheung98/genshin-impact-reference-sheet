import React from "react";
import { formatTalents } from "../cards/CharCardBack"

let freedomIcon = require("../../assets/materials/talent_mats/Freedom.png").default;
let resistanceIcon = require("../../assets/materials/talent_mats/Resistance.png").default;
let balladIcon = require("../../assets/materials/talent_mats/Ballad.png").default;
let prosperityIcon = require("../../assets/materials/talent_mats/Prosperity.png").default;
let diligenceIcon = require("../../assets/materials/talent_mats/Diligence.png").default;
let goldIcon = require("../../assets/materials/talent_mats/Gold.png").default;

const TalentFilter = (props) => {
    return (
        <div>
            <div className="filter">
                <img className="filter-off" id="freedom-button" src={freedomIcon} alt="Freedom" onClick={props.setFilters} />
                <p className="material-tooltip">{formatTalents("Freedom")}</p>
            </div>
            <div className="filter">
                <img className="filter-off" id="resistance-button" src={resistanceIcon} alt="Resistance" onClick={props.setFilters} />
                <p className="material-tooltip">{formatTalents("Resistance")}</p>
            </div>
            <div className="filter">
                <img className="filter-off" id="ballad-button" src={balladIcon} alt="Ballad" onClick={props.setFilters} />
                <p className="material-tooltip">{formatTalents("Ballad")}</p>
            </div>
            <div className="filter">
                <img className="filter-off" id="prosperity-button" src={prosperityIcon} alt="Prosperity" onClick={props.setFilters} />
                <p className="material-tooltip">{formatTalents("Prosperity")}</p>
            </div>
            <div className="filter">
                <img className="filter-off" id="diligence-button" src={diligenceIcon} alt="Diligence" onClick={props.setFilters} />
                <p className="material-tooltip">{formatTalents("Diligence")}</p>
            </div>
            <div className="filter">
                <img className="filter-off" id="gold-button" src={goldIcon} alt="Gold" onClick={props.setFilters} />
                <p className="material-tooltip">{formatTalents("Gold")}</p>
            </div>
        </div>
    )
}

export default TalentFilter;
