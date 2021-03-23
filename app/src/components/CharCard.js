import React from "react";
import CharCardFront from "./CharCardFront";
import CharCardBack from "./CharCardBack";

const flipCardFromFront = (char) => {
    document.getElementById(`${char.name}-front`).style = "transform: rotateY(180deg);transition: transform 0.5s;transform-style: preserve-3d";
    document.getElementById(`${char.name}-back`).style = `transform: rotateY(0deg);transition: transform 0.5s;transform-style: preserve-3d;background-image: url(${char.images.avatar})`;
}

const flipCardFromBack = (char) => {
    document.getElementById(`${char.name}-back`).style = `transform: rotateY(180deg);transition: transform 0.5s;transform-style: preserve-3d;background-image: url(${char.images.avatar})`;
    document.getElementById(`${char.name}-front`).style = "transform: rotateY(0deg);transition: transform 0.5s;transform-style: preserve-3d";
}

const CharCard = (props) => {
    return (
        <div className="char-card">
            <CharCardFront char={props.char} flipCardFromFront={flipCardFromFront} flipCardFromBack={flipCardFromBack} />
            <CharCardBack char={props.char} flipCardFromFront={flipCardFromFront} flipCardFromBack={flipCardFromBack} />
        </div>
    )
}

export default CharCard;