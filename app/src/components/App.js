import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import ElementFilter from "./ElementFilter";
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

    setElementFilters = (e) => {
        if (!this.state.filters.element.includes(e.target.value)) {
            this.setState({
                filters: {
                    ...this.state.filters,
                    element: [...this.state.filters.element, e.target.value]
                }
            });
        }
        else {
            let temp = [...this.state.filters.element];
            let idx = temp.indexOf(e.target.value);
            temp.splice(idx, 1);
            this.setState({
                filters: {
                    ...this.state.filters,
                    element: temp
                }
            });
        }
    }

    render() {
        return (
            <div className="ui container">
                <header className="ui centered block header">
                    <h1>Genshin Impact Reference Sheet</h1>
                </header>
                <div className="ui container">
                    <div className="ui hidden section divider"></div>
                    <ElementFilter setElementFilters={this.setElementFilters}/>
                    <CharBrowser chars={this.state.chars} />
                </div>
            </div>
        )
    }
}

export default App;
