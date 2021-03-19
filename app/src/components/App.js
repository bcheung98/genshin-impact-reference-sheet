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

    render() {
        return (
            <div className="ui container">
                <header className="ui block header">
                    <h1>Genshin Impact Reference Sheet</h1>
                </header>
                <div className="ui container">
                    <div className="ui grid">
                        <div className="ui divider">
                            <CharBrowser chars={this.state.chars} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
