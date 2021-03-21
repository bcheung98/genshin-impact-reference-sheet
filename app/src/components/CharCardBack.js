import React, { Component } from "react";

class CharCardBack extends Component {

    render() {
        let { char } = this.props
        let { talents, ascensionMat, localMat, commonMat, bossMat } = char.materials;
        return (
            <div id={`${char.name}-back`} className="char-card-back" onClick={() => this.props.flipCardFromBack(this.props.char)} >
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