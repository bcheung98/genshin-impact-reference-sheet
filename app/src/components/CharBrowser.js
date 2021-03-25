import React from "react";
import CharCard from "./cards/CharCard"

const CharBrowser = (props) => {
    return (
        <div className="char-container">
            {props.chars.map(char => <CharCard key={char.name} char={char} />)}
        </div>
    )
}

export default CharBrowser;
