import React, { Component } from "react";
import CharCardFront from "./CharCardFront";
import CharCardBack from "./CharCardBack";

class CharCard extends Component {

    render() {
        return (
            <div className="char-card">
                <CharCardFront char={this.props.char} flipCardFromFront={this.props.flipCardFromFront} flipCardFromBack={this.props.flipCardFromBack} />
                <CharCardBack char={this.props.char} flipCardFromFront={this.props.flipCardFromFront} flipCardFromBack={this.props.flipCardFromBack} />
            </div>
        )
    }
}

export default CharCard;