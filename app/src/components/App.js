import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import CharBrowser from "./CharBrowser";
import characters from "../data/characters";

class App extends Component {

    state = {
        chars: [],
        filters: {
            rarity: "all",
            element: [],
            weapon: [],
            gender: [],
            nation: []
        }
    }

    componentDidMount() {
        this.setState({
            chars: characters
        });
    }

    render() {
        return (
            <div className="ui container">
                <header className="ui centered block header">
                    <h1>Genshin Impact Reference Sheet</h1>
                </header>
                <div className="ui container">
                    <div className="ui hidden section divider"></div>
                    <div>
                        <CharBrowser chars={this.state.chars} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
