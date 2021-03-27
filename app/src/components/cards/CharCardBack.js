import React from "react";

export const formatTalents = (talent) => {
    switch (talent) {
        case "Freedom":
        case "Prosperity":
            talent += " (Mon/Thu)";
            break;
        case "Resistance":
        case "Diligence":
            talent += " (Tue/Fri)"
            break;
        case "Ballad":
        case "Gold":
            talent += " (Wed/Sat)"
            break;
        default:
            talent += "";
    }
    return talent;
}

const CharCardBack = (props) => {
    let { char } = props
    let { talents, ascensionMat, localMat, commonMat, bossMat } = char.materials;
    let avatarURL = require(`../../assets/avatars/Character_${char.name.split(" ").join("_")}_Avatar.png`).default;
    return (
        <div id={`${char.name}-back`} className="char-card-back" onClick={() => props.flipCardFromBack(props.char, avatarURL)} >
            <div className="materials">
                <div className="material-container">
                    <p className="material-tooltip">{formatTalents(talents)}</p>
                    <img className="material-img-back" src={require(`../../assets/materials/talent_mats/${talents}.png`).default} alt={talents} />
                </div>
                <div className="material-container">
                    <p className="material-tooltip">{ascensionMat}</p>
                    <img className="material-img-back" src={require(`../../assets/materials/ascension_mats/${ascensionMat.split(" ").join("_")}.png`).default} alt={ascensionMat} />
                </div>
                <div className="material-container">
                    <p className="material-tooltip">{char.element} Gemstone</p>
                    <img className="material-img-back" src={require(`../../assets/materials/ascension_gems/${char.element}_Gemstone.png`).default} alt={char.element} />
                </div>
                <div className="material-container">
                    <p className="material-tooltip">{localMat}</p>
                    <img className="material-img-back" src={require(`../../assets/materials/local_specialties/${localMat.split(" ").join("_")}.png`).default} alt={localMat} />
                </div>
                <div className="material-container">
                    <p className="material-tooltip">{commonMat}</p>
                    <img className="material-img-back" src={require(`../../assets/materials/common_mats/${commonMat.split(" ").join("_")}.png`).default} alt={commonMat} />
                </div>
                <div className="material-container">
                    <p className="material-tooltip">{bossMat}</p>
                    <img className="material-img-back" src={require(`../../assets/materials/boss_mats/${bossMat.split(" ").join("_")}.png`).default} alt={bossMat} />
                </div>
            </div>
        </div>
    )
}

export default CharCardBack;
