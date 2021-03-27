import React from "react";

const CharCardFront = (props) => {
    let { name, title, rarity, element, weapon, description, nation } = props.char;
    let avatarURL = require(`../../assets/avatars/Character_${name.split(" ").join("_")}_Avatar.png`).default;
    return (
        <div id={`${name}-front`} className="char-card-front" onClick={() => props.flipCardFromFront(props.char, avatarURL)}>
            <div>
                <h1>{name}</h1>
                <img className="rating-img" src={require(`../../assets/stars/Icon_${rarity}_Stars.png`).default} alt={rarity} />
                <div>
                    <img src={require(`../../assets/elements/Element_${element}.png`).default} alt={element} />
                    <img src={require(`../../assets/weapons/Weapon-class-${weapon.toLowerCase()}-icon.png`).default} alt={weapon} />
                </div>
            </div>
            <div className="char-title">
                {title}
            </div>
            <img src={require(`../../assets/cards/Character_${name.split(" ").join("_")}_Card.png`).default} alt={name} />
            <img className="nation-img" src={require(`../../assets/nations/${nation}.png`).default} alt={nation} />
            <div className="char-desc">
                {description}
            </div>
        </div>
    )
}

export default CharCardFront;
