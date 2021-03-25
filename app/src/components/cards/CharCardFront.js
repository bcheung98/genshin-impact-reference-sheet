import React from "react";

import anemo from "../../assets/elements/Element_Anemo.png";
import cryo from "../../assets/elements/Element_Cryo.png";
import electro from "../../assets/elements/Element_Electro.png";
import geo from "../../assets/elements/Element_Geo.png";
import hydro from "../../assets/elements/Element_Hydro.png";
import pyro from "../../assets/elements/Element_Pyro.png";

import bow from "../../assets/weapons/Weapon-class-bow-icon.png";
import catalyst from "../../assets/weapons/Weapon-class-catalyst-icon.png";
import claymore from "../../assets/weapons/Weapon-class-claymore-icon.png";
import polearm from "../../assets/weapons/Weapon-class-polearm-icon.png";
import sword from "../../assets/weapons/Weapon-class-sword-icon.png";

import fourStars from "../../assets/stars/Icon_4_Stars.png";
import fiveStars from "../../assets/stars/Icon_5_Stars.png";

import mondstadt from "../../assets/nations/Mondstadt.png";
import liyue from "../../assets/nations/Liyue.png";

const elementMap = {
    "Anemo": anemo,
    "Cryo": cryo,
    "Electro": electro,
    "Geo": geo,
    "Hydro": hydro,
    "Pyro": pyro
};

const weaponMap = {
    "Bow": bow,
    "Catalyst": catalyst,
    "Claymore": claymore,
    "Polearm": polearm,
    "Sword": sword
};

const starMap = {
    4: fourStars,
    5: fiveStars
};

const nationMap = {
    "Mondstadt": mondstadt,
    "Liyue": liyue
};

const CharCardFront = (props) => {
    let { name, title, rarity, images, element, weapon, description, nation } = props.char;
    return (
        <div id={`${name}-front`} className="char-card-front" onClick={() => props.flipCardFromFront(props.char)}>
            <div>
                <h1>{name}</h1>
                <img className="rating-img" src={starMap[rarity]} alt={rarity} />
                <div>
                    <img src={elementMap[element]} alt={element} />
                    <img src={weaponMap[weapon]} alt={weapon} />
                </div>
            </div>
            <div className="char-title">
                {title}
            </div>
            <img src={(images.card)} alt={name} />
            <img className="nation-img" src={nationMap[nation]} alt={nation} />
            <div className="char-desc">
                {description}
            </div>
        </div>
    )
}

export default CharCardFront;
