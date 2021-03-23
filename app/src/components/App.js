import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import ElementFilter from "./ElementFilter";
import WeaponFilter from "./WeaponFilter";
import CharBrowser from "./CharBrowser";
import characters from "../data/characters";

class App extends Component {

    state = {
        allChars: [],
        displayedChars: [],
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
            allChars: characters,
            displayedChars: characters
        });
    }

    setElementFilters = (e) => {
        if (!this.state.filters.element.includes(e.target.value)) {
            this.setState({
                filters: {
                    ...this.state.filters,
                    element: [...this.state.filters.element, e.target.value]
                }
            }, () => this.filterCharacters());
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
            }, () => this.filterCharacters());
        }
    }

    setWeaponFilters = (e) => {
        if (!this.state.filters.weapon.includes(e.target.value)) {
            this.setState({
                filters: {
                    ...this.state.filters,
                    weapon: [...this.state.filters.weapon, e.target.value]
                }
            }, () => this.filterCharacters());
        }
        else {
            let temp = [...this.state.filters.weapon];
            let idx = temp.indexOf(e.target.value);
            temp.splice(idx, 1);
            this.setState({
                filters: {
                    ...this.state.filters,
                    weapon: temp
                }
            }, () => this.filterCharacters());
        }
    }

    filterCharacters = () => {
        let result = [...this.state.allChars];
        let elementFilter = result.filter(char => this.state.filters.element.includes(char.element));
        elementFilter.length === 0 ? result = [...this.state.allChars] : result = elementFilter; 
        let weaponFilter = result.filter(char => this.state.filters.weapon.includes(char.weapon));
        weaponFilter.length === 0 ? result = [...this.state.allChars] : result = weaponFilter; 
        result.length > 0 ? this.setState({displayedChars: result}) : this.setState({displayedChars: characters});
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
                    <CharBrowser chars={this.state.displayedChars} />
                </div>
            </div>
        )
    }
}

export default App;
