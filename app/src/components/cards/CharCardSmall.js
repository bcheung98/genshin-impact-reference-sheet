import React from "react";
import { formatTalents } from "./CharCardBack";

const CharCardSmall = (props) => {
    let { name, rarity, element, weapon } = props.char;
    let { talents, ascensionMat, localMat, commonMat, bossMat } = props.char.materials;
    return (
        <div className="char-card-small">
            <div>
                <h1 className="char-name">{name}</h1>
                <div className="small-icon">
                    <img className="element-card-small" src={require(`../../assets/elements/Element_${element}.png`).default} alt={element} />
                    <img className="weapon-card-small" src={require(`../../assets/weapons/Weapon-class-${weapon.toLowerCase()}-icon.png`).default} alt={weapon} />
                </div>
            </div>
            <div>
                <img className="char-icon" src={require(`../../assets/characters/icons/Character_${name.split(" ").join("_")}_Icon.png`).default} alt={name} />
            </div>
            <div className="rating-card-small">
                <img className="rating-img" src={require(`../../assets/stars/Icon_${rarity}_Stars.png`).default} alt={rarity} />
            </div>
            <div className="materials-small">
                <div className="material-container-small">
                    <p className="material-tooltip">{formatTalents(talents)}</p>
                    <img className="material-img-small" src={require(`../../assets/materials/talent_mats/${talents}.png`).default} alt={talents} />
                </div>
                <div className="material-container-small">
                    <p className="material-tooltip">{ascensionMat}</p>
                    <img className="material-img-small" src={require(`../../assets/materials/ascension_mats/${ascensionMat.split(" ").join("_")}.png`).default} alt={ascensionMat} />
                </div>
                <div className="material-container-small">
                    <p className="material-tooltip">{element} Gemstone</p>
                    <img className="material-img-small" src={require(`../../assets/materials/ascension_gems/${element}_Gemstone.png`).default} alt={element} />
                </div>
                <div className="material-container-small">
                    <p className="material-tooltip">{localMat}</p>
                    <img className="material-img-small" src={require(`../../assets/materials/local_specialties/${localMat.split(" ").join("_")}.png`).default} alt={localMat} />
                </div>
                <div className="material-container-small">
                    <p className="material-tooltip">{commonMat}</p>
                    <img className="material-img-small" src={require(`../../assets/materials/common_mats/${commonMat.split(" ").join("_")}.png`).default} alt={commonMat} />
                </div>
                <div className="material-container-small">
                    <p className="material-tooltip">{bossMat}</p>
                    <img className="material-img-small" src={require(`../../assets/materials/boss_mats/${bossMat.split(" ").join("_")}.png`).default} alt={bossMat} />
                </div>
            </div>
        </div>
    )
}

export default CharCardSmall;