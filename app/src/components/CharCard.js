import React, { Component } from "react";
import CharCardFront from "./CharCardFront";
import CharCardBack from "./CharCardBack";

class CharCard extends Component {

    flipCardFromFront = (card) => {
        document.getElementById(`${card}-front`).style = "transform: rotateY(180deg);transition: transform 0.8s;transform-style: preserve-3d";
        document.getElementById(`${card}-back`).style = "transform: rotateY(0deg);transition: transform 0.8s;transform-style: preserve-3d";
    }

    flipCardFromBack = (card) => {
        document.getElementById(`${card}-back`).style = "transform: rotateY(180deg);transition: transform 0.8s;transform-style: preserve-3d";
        document.getElementById(`${card}-front`).style = "transform: rotateY(0deg);transition: transform 0.8s;transform-style: preserve-3d";
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