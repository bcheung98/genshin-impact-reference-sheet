import React, { Component } from "react";
import CharCard from "./CharCard";

class CharBrowser extends Component {
    render() {
        return (
            <div className="ui cards">
               {this.props.chars.map(char => <CharCard char={char}/>)}
            </div>
        )
    }
}

export default CharBrowser;