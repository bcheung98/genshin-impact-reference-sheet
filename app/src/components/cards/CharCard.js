import React from "react";
import CharCardFront from "./CharCardFront";
import CharCardBack from "./CharCardBack";

const flipCardFromFront = (char, url) => {
    document.getElementById(`${char.name}-front`).style = "transform: rotateY(180deg);transition: transform 0.5s;transform-style: preserve-3d";
    document.getElementById(`${char.name}-back`).style = `transform: rotateY(0deg);transition: transform 0.5s;transform-style: preserve-3d;background-image: url(${url})`;
}

const flipCardFromBack = (char, url) => {
    document.getElementById(`${char.name}-back`).style = `transform: rotateY(180deg);transition: transform 0.5s;transform-style: preserve-3d;background-image: url(${url})`;
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
