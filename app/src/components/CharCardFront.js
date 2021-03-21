import React, { Component } from "react";

import anemo from "../assets/elements/Element_Anemo.png";
import cryo from "../assets/elements/Element_Cryo.png";
import electro from "../assets/elements/Element_Electro.png";
import geo from "../assets/elements/Element_Geo.png";
import hydro from "../assets/elements/Element_Hydro.png";
import pyro from "../assets/elements/Element_Pyro.png";

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

const starMap = {
    4: fourStars,
    5: fiveStars
};

class CharCardFront extends Component {

    render() {
        let { name, title, rarity, images, element, weapon } = this.props.char;
        return (
            <div id={`${name}-front`} className="char-card-front" onClick={() => this.props.flipCardFromFront(this.props.char)}>
                <div>
                    <h3>{name.toUpperCase()}</h3>
                    <img src={elementMap[element]} alt={element}/>
                </div>
                <p><i>{title}</i></p>
                <img className="rating-img" src={starMap[rarity]} alt={rarity} />
                <img src={images.card} alt={name} />
                <p><b>Weapon:</b> {weapon}</p>
            </div>
        )
    }
}

export default CharCardFront;