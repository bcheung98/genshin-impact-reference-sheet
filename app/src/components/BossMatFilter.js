import React from "react";

let clawIcon = require("../assets/materials/boss_mats/Dvalins_Claw.png").default;
let plumeIcon = require("../assets/materials/boss_mats/Dvalins_Plume.png").default;
let sighIcon = require("../assets/materials/boss_mats/Dvalins_Sigh.png").default;
let ringIcon = require("../assets/materials/boss_mats/Ring_of_Boreas.png").default;
let locketIcon = require("../assets/materials/boss_mats/Spirit_Locket_of_Boreas.png").default;
let tailIcon = require("../assets/materials/boss_mats/Tail_of_Boreas.png").default;
let shadowIcon = require("../assets/materials/boss_mats/Shadow_of_the_Warrior.png").default;
let shardIcon = require("../assets/materials/boss_mats/Shard_of_a_Foul_Legacy.png").default;
let tuskIcon = require("../assets/materials/boss_mats/Tusk_of_Monoceros_Caeli.png").default;

const BossMatFilter = (props) => {
    return (
        <div className="filter">
            <img className="filter-off" id="dvalin's claw-button" src={clawIcon} alt="Dvalin's Claw" onClick={props.setFilters} />
            <img className="filter-off" id="dvalin's plume-button" src={plumeIcon} alt="Dvalin's Plume" onClick={props.setFilters} />
            <img className="filter-off" id="dvalin's sigh-button" src={sighIcon} alt="Dvalin's Sigh" onClick={props.setFilters} />
            <img className="filter-off" id="ring of boreas-button" src={ringIcon} alt="Ring of Boreas" onClick={props.setFilters} />
            <img className="filter-off" id="spirit locket of boreas-button" src={locketIcon} alt="Spirit Locket of Boreas" onClick={props.setFilters} />
            <img className="filter-off" id="tail of boreas-button" src={tailIcon} alt="Tail of Boreas" onClick={props.setFilters} />
            <img className="filter-off" id="shadow of the warrior-button" src={shadowIcon} alt="Shadow of the Warrior" onClick={props.setFilters} />
            <img className="filter-off" id="shard of a foul legacy-button" src={shardIcon} alt="Shard of a Foul Legacy" onClick={props.setFilters} />
            <img className="filter-off" id="tusk of monoceros caeli-button" src={tuskIcon} alt="Tusk of Monoceros Caeli" onClick={props.setFilters} />
        </div>
    )
}

export default BossMatFilter;
