import React from "react";
import CharCard from "./cards/CharCard"

const CharBrowser = (props) => {
    return (
        <div className="char-display">
            <div className="char-container">
                {props.chars.map(char => <CharCard key={char.name} char={char} />)}
            </div>
        </div>
    )
}

export default CharBrowser;
