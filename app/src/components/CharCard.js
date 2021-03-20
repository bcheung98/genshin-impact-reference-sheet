import React, { Component } from "react";
import CharCardFront from "./CharCardFront";
import CharCardBack from "./CharCardBack";

class CharCard extends Component {

    render() {
        return (
            <div className="char-card">
                <CharCardFront char={this.props.char} />
                <CharCardBack char={this.props.char} />
            </div>
        )
    }
}

export default CharCard;