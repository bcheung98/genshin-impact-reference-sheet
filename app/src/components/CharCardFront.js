import React, { Component } from "react";

import anemo from "../assets/elements/Element_Anemo.png";
import cryo from "../assets/elements/Element_Cryo.png";
import electro from "../assets/elements/Element_Electro.png";
import geo from "../assets/elements/Element_Geo.png";
import hydro from "../assets/elements/Element_Hydro.png";
import pyro from "../assets/elements/Element_Pyro.png";

import bow from "../assets/weapons/Weapon-class-bow-icon.png";
import catalyst from "../assets/weapons/Weapon-class-catalyst-icon.png";
import claymore from "../assets/weapons/Weapon-class-claymore-icon.png";
import polearm from "../assets/weapons/Weapon-class-polearm-icon.png";
import sword from "../assets/weapons/Weapon-class-sword-icon.png";

import fourStars from "../assets/stars/Icon_4_Stars.png";
import fiveStars from "../assets/stars/Icon_5_Stars.png";

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

class CharCardFront extends Component {

    render() {
        let { name, title, rarity, images, element, weapon, description } = this.props.char;
        return (
            <div id={`${name}-front`} className="char-card-front" onClick={() => this.props.flipCardFromFront(this.props.char)}>
                <div>
                    <h2>{name.toUpperCase()}</h2>
                    <img className="rating-img" src={starMap[rarity]} alt={rarity} />
                    <div>
                        <img src={elementMap[element]} alt={element} />
                        <img src={weaponMap[weapon]} alt={weapon} />
                    </div>
                </div>
                <p><i>{title}</i></p>
                <img src={images.card} alt={name} />
                <div className="char-desc">
                    <p><i>{description}</i></p>
                </div>
            </div>
        )
    }
}

export default CharCardFront;