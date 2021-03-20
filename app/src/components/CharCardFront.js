import React, { Component } from "react";

import fourStars from "../assets/stars/Icon_4_Stars.png";
import fiveStars from "../assets/stars/Icon_5_Stars.png";

const starMap = {
    4: fourStars,
    5: fiveStars
}

class CharCardFront extends Component {

    render() {
        let { name, title, rarity, image, element, weapon } = this.props.char;
        return (
            <div id={`${name}-front`} className="char-card-front" onClick={() => this.props.flipCardFromFront(name)}>
                <p>{name.toUpperCase()}</p>
                <p><i>{title}</i></p>
                <img className="rating-img" src={starMap[rarity]} alt={rarity} />
                <img src={image} alt={name} />
                <p><b>Element:</b> {element}</p>
                <p><b>Weapon:</b> {weapon}</p>
            </div>
        )
    }
}

export default CharCardFront;