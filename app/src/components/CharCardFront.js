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
            <div className="ui card">
                <div className="content">
                    <div className="ui header">
                        {name.toUpperCase()}
                    </div>
                    <div className="meta">
                        <i>{title}</i>
                    </div>
                    <div className="ui large image">
                        <img src={starMap[rarity]} alt={rarity} />
                    </div>
                    <div className="ui fluid image">
                        <img src={image} alt={name} />
                    </div>
                    <div className="description">
                        <p>Element: {element}</p>
                        <p>Weapon: {weapon}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CharCardFront;