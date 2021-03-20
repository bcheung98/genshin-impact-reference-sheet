import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import CharBrowser from "./CharBrowser";
import characters from "../data/characters";

class App extends Component {

    state = {
        chars: characters,
        filters: {
            rarity: "all",
            element: "all",
            weapon: "all",
            gender: "all",
            nation: "all"
        }
    }

    flipCardFromFront = (card) => {
        document.getElementById(`${card}-front`).style = "transform: rotateY(180deg);transition: transform 0.8s;transform-style: preserve-3d";
        document.getElementById(`${card}-back`).style = "transform: rotateY(0deg);transition: transform 0.8s;transform-style: preserve-3d";
    }

    flipCardFromBack = (card) => {
        document.getElementById(`${card}-back`).style = "transform: rotateY(180deg);transition: transform 0.8s;transform-style: preserve-3d";
        document.getElementById(`${card}-front`).style = "transform: rotateY(0deg);transition: transform 0.8s;transform-style: preserve-3d";
    }

    render() {
        return (
            <div className="ui container">
                <header className="ui centered block header">
                    <h1>Genshin Impact Reference Sheet</h1>
                </header>
                <div className="ui container">
                    <div className="ui hidden section divider"></div>
                    <div className="ui grid">
                        <CharBrowser chars={this.state.chars} flipCardFromFront={this.flipCardFromFront} flipCardFromBack={this.flipCardFromBack}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
