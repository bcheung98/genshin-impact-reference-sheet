import React, {Component} from "react";
import albedoCard from "../assets/cards/Character_Albedo_Card.png";
import amberCard from "../assets/cards/Character_Amber_Card.png";
import barbaraCard from "../assets/cards/Character_Barbara_Card.png";
import beidouCard from "../assets/cards/Character_Beidou_Card.png";
import bennettCard from "../assets/cards/Character_Bennett_Card.png";
import chongyunCard from "../assets/cards/Character_Chongyun_Card.png";
import dilucCard from "../assets/cards/Character_Diluc_Card.png";
import dionaCard from "../assets/cards/Character_Diona_Card.png";
import fischlCard from "../assets/cards/Character_Fischl_Card.png";

const cardMap = {
    "Albedo": albedoCard,
    "Amber": amberCard,
    "Barbara": barbaraCard,
    "Beidou": beidouCard,
    "Bennett": bennettCard,
    "Chongyun": chongyunCard,
    "Diluc": dilucCard,
    "Diona": dionaCard,
    "Fischl": fischlCard
}

class CharCard extends Component {
    render() {
        let {name, rarity, element, weapon} = this.props.char;
        return (
            <div className="ui card">
                <div className="content">
                    <a className="header">
                        {name}
                    </a>
                    <div className="meta">
                        <span className="date">{rarity} Star</span>
                    </div>
                    <div className="ui fluid image">
                        <img src={cardMap[name]} alt={name}/>
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

export default CharCard;