import React, { Component } from "react";
import CharCardFront from "./CharCardFront";

class CharBrowser extends Component {
    render() {
        return (
            <div className="ui centered cards">
                {this.props.chars.map(char => <CharCardFront key={char.name} char={char} />)}
            </div>
        )
    }
}

export default CharBrowser;