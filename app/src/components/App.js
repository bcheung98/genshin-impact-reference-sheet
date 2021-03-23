import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import ElementFilter from "./ElementFilter";
import WeaponFilter from "./WeaponFilter";
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
        let temp = [...this.state.filters.element];
        !this.state.filters.element.includes(e.target.value) ? temp.push(e.target.value) : temp.splice(temp.indexOf(e.target.value), 1);
        this.setState({
            filters: {
                ...this.state.filters,
                element: temp
            }
        }, () => this.filterCharacters());
    }

    setWeaponFilters = (e) => {
        let temp = [...this.state.filters.weapon];
        !this.state.filters.weapon.includes(e.target.value) ? temp.push(e.target.value) : temp.splice(temp.indexOf(e.target.value), 1);
        this.setState({
            filters: {
                ...this.state.filters,
                weapon: temp
            }
        }, () => this.filterCharacters());
    }

    filterCharacters = () => {
        let chars = [...characters];
        if (this.state.filters.element.length > 0) {
            chars = chars.filter(char => this.state.filters.element.includes(char.element));
        }
        if (this.state.filters.weapon.length > 0) {
            chars = chars.filter(char => this.state.filters.weapon.includes(char.weapon));
        }
        this.setState({ chars });
    }

    render() {
        return (
            <div className="ui container">
                <header className="ui centered block header">
                    <h1>Genshin Impact Reference Sheet</h1>
                </header>
                <div className="ui container">
                    <div className="ui hidden section divider"></div>
                    <ElementFilter setElementFilters={this.setElementFilters} />
                    <WeaponFilter setWeaponFilters={this.setWeaponFilters} />
                    <CharBrowser chars={this.state.chars} />
                </div>
            </div>
        )
    }
}

export default App;
