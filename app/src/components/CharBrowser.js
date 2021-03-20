import React, { Component } from "react";
import CharCard from "./CharCard"

class CharBrowser extends Component {

    render() {
        return (
            <div className="ui centered cards">
                {this.props.chars.map(char => <CharCard key={char.name} char={char} />)}
            </div>
        )
    }
}

export default CharBrowser;