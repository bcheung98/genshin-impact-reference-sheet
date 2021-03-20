import React, { Component } from "react";
import CharCardFront from "./CharCardFront";
import CharCardBack from "./CharCardBack";

class CharCard extends Component {

    flipCardFromFront = (char) => {
        document.getElementById(`${char.name}-front`).style = "transform: rotateY(180deg);transition: transform 0.5s;transform-style: preserve-3d";
        document.getElementById(`${char.name}-back`).style = `transform: rotateY(0deg);transition: transform 0.5s;transform-style: preserve-3d;background-image: url(${char.imageAvatar})`;
    }

    flipCardFromBack = (char) => {
        document.getElementById(`${char.name}-back`).style = `transform: rotateY(180deg);transition: transform 0.5s;transform-style: preserve-3d;background-image: url(${char.imageAvatar})`;
        document.getElementById(`${char.name}-front`).style = "transform: rotateY(0deg);transition: transform 0.5s;transform-style: preserve-3d";
    }

    render() {
        return (
            <div className="char-card">
                <CharCardFront char={this.props.char} flipCardFromFront={this.flipCardFromFront} flipCardFromBack={this.flipCardFromBack} />
                <CharCardBack char={this.props.char} flipCardFromFront={this.flipCardFromFront} flipCardFromBack={this.flipCardFromBack} />
            </div>
        )
    }
}

export default CharCard;