import React, { Component } from "react";

class CharCardBack extends Component {

    render() {
        let { talents, ascensionMat, localMat, commonMat, bossMat } = this.props.char.materials;
        return (
            <div id={`${this.props.char.name}-back`} className="char-card-back" onClick={() => this.props.flipCardFromBack(this.props.char.name)}>
                <p>Talent Material: {talents}</p>
                <p>Ascension Material: {ascensionMat}</p>
                <p>Local Specialty: {localMat}</p>
                <p>Common Material: {commonMat}</p>
                <p>Boss Material: {bossMat}</p>
            </div>
        )
    }
}

export default CharCardBack;