import React from "react";

let pyroIcon = require("../../assets/elements/Element_Pyro.png").default;
let hydroIcon = require("../../assets/elements/Element_Hydro.png").default;
let electroIcon = require("../../assets/elements/Element_Electro.png").default;
let cryoIcon = require("../../assets/elements/Element_Cryo.png").default;
let anemoIcon = require("../../assets/elements/Element_Anemo.png").default;
let geoIcon = require("../../assets/elements/Element_Geo.png").default;

const ElementFilter = (props) => {
    return (
        <div className="filter-bar">
            <div className="filter">
                <img className="filter-off" id="pyro-button" src={pyroIcon} alt="Pyro" onClick={(e) => props.onClick(e, "element")} />
                <p className="material-tooltip">Pyro</p>
            </div>
            <div className="filter">
                <img className="filter-off" id="hydro-button" src={hydroIcon} alt="Hydro" onClick={(e) => props.onClick(e, "element")} />
                <p className="material-tooltip">Hydro</p>
            </div>
            <div className="filter">
                <img className="filter-off" id="electro-button" src={electroIcon} alt="Electro" onClick={(e) => props.onClick(e, "element")} />
                <p className="material-tooltip">Electro</p>
            </div>
            <div className="filter">
                <img className="filter-off" id="cryo-button" src={cryoIcon} alt="Cryo" onClick={(e) => props.onClick(e, "element")} />
                <p className="material-tooltip">Cryo</p>
            </div>
            <div className="filter">
                <img className="filter-off" id="anemo-button" src={anemoIcon} alt="Anemo" onClick={(e) => props.onClick(e, "element")} />
                <p className="material-tooltip">Anemo</p>
            </div>
            <div className="filter">
                <img className="filter-off" id="geo-button" src={geoIcon} alt="Geo" onClick={(e) => props.onClick(e, "element")} />
                <p className="material-tooltip">Geo</p>
            </div>
        </div>
    )
}

export default ElementFilter;
