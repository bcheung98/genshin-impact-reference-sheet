import React from "react";
import CharCard from "./cards/CharCard";
import CharCardSmall from "./cards/CharCardSmall";

const CharBrowser = (props) => {
    return (
        <div className="char-display">
            <div className="char-container">
                {props.chars.map(char => props.cards === "big" ? <CharCard key={char.id} char={char} /> : <CharCardSmall key={char.id} char={char} />)}
            </div>
        </div>
    )
}

export default CharBrowser;
