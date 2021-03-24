import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import ElementFilter from "./ElementFilter";
import WeaponFilter from "./WeaponFilter";
import TalentFilter from "./TalentFilter";
import CharBrowser from "./CharBrowser";
import characters from "../data/characters";

class App extends Component {

    state = {
        chars: [],
        filters: {
            element: [],
            weapon: [],
            talent: []
        }
    }

    componentDidMount() {
        this.setState({
            chars: characters
        });
    }

    setElementFilters = (e) => {
        let button = document.getElementById(`${e.target.alt.toLowerCase()}-button`)
        button.className === "filter-off" ? button.className = "filter-on" : button.className = "filter-off";
        let temp = [...this.state.filters.element];
        !this.state.filters.element.includes(e.target.alt) ? temp.push(e.target.alt) : temp.splice(temp.indexOf(e.target.alt), 1);
        this.setState({
            filters: {
                ...this.state.filters,
                element: temp
            }
        }, () => this.filterCharacters());
    }

    setWeaponFilters = (e) => {
        let button = document.getElementById(`${e.target.alt.toLowerCase()}-button`)
        button.className === "filter-off" ? button.className = "filter-on" : button.className = "filter-off";
        let temp = [...this.state.filters.weapon];
        !this.state.filters.weapon.includes(e.target.alt) ? temp.push(e.target.alt) : temp.splice(temp.indexOf(e.target.alt), 1);
        this.setState({
            filters: {
                ...this.state.filters,
                weapon: temp
            }
        }, () => this.filterCharacters());
    }

    setTalentFilters = (e) => {
        let button = document.getElementById(`${e.target.alt.toLowerCase()}-button`)
        button.className === "filter-off" ? button.className = "filter-on" : button.className = "filter-off";
        let temp = [...this.state.filters.talent];
        !this.state.filters.talent.includes(e.target.alt) ? temp.push(e.target.alt) : temp.splice(temp.indexOf(e.target.alt), 1);
        this.setState({
            filters: {
                ...this.state.filters,
                talent: temp
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
        if (this.state.filters.talent.length > 0) {
            chars = chars.filter(char => this.state.filters.talent.includes(char.materials.talents));
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
                    <div className="filter-bar">
                        <ElementFilter setFilters={this.setElementFilters} />
                        <WeaponFilter setFilters={this.setWeaponFilters} />
                    </div>
                    <div className="filter-bar">
                        <TalentFilter setFilters={this.setTalentFilters} />
                    </div>
                    <CharBrowser chars={this.state.chars} />
                </div>
            </div>
        )
    }
}

export default App;
