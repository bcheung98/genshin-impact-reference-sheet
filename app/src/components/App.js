import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Filter from "./Filters";
import CharBrowser from "./CharBrowser";

class App extends Component {

    state = {
        chars: [],
        filters: {
            element: [],
            weapon: [],
            talent: [],
            bossMat: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:5001/characters")
            .then(r => r.json())
            .then(chars => this.setState({ chars }));
    }

    sortCharacters = () => {
        return [...this.state.chars].sort((a, b) => a.name < b.name ? -1 : 1)
    }

    toggleButton = (e, filterType) => {
        let button = document.getElementById(`${e.target.alt.toLowerCase()}-button`)
        button.className === "filter-off" ? button.className = "filter-on" : button.className = "filter-off";
        switch (filterType) {
            case "element":
                this.setElementFilters(e.target.alt);
                break;
            case "weapon":
                this.setWeaponFilters(e.target.alt);
                break;
            case "talent":
                this.setTalentFilters(e.target.alt);
                break;
            case "boss":
                this.setBossMatFilters(e.target.alt);
                break;
            default:
                this.filterCharacters();
        }
    }

    setElementFilters = (element) => {
        let temp = [...this.state.filters.element];
        !this.state.filters.element.includes(element) ? temp.push(element) : temp.splice(temp.indexOf(element), 1);
        this.setState({
            filters: {
                ...this.state.filters,
                element: temp
            }
        }, () => this.filterCharacters());
    }

    setWeaponFilters = (weapon) => {
        let temp = [...this.state.filters.weapon];
        !this.state.filters.weapon.includes(weapon) ? temp.push(weapon) : temp.splice(temp.indexOf(weapon), 1);
        this.setState({
            filters: {
                ...this.state.filters,
                weapon: temp
            }
        }, () => this.filterCharacters());
    }

    setTalentFilters = (talent) => {
        let temp = [...this.state.filters.talent];
        !this.state.filters.talent.includes(talent) ? temp.push(talent) : temp.splice(temp.indexOf(talent), 1);
        this.setState({
            filters: {
                ...this.state.filters,
                talent: temp
            }
        }, () => this.filterCharacters());
    }

    setBossMatFilters = (bossMat) => {
        let temp = [...this.state.filters.bossMat];
        !this.state.filters.bossMat.includes(bossMat) ? temp.push(bossMat) : temp.splice(temp.indexOf(bossMat), 1);
        this.setState({
            filters: {
                ...this.state.filters,
                bossMat: temp
            }
        }, () => this.filterCharacters());
    }

    filterCharacters = () => {
        let chars = this.sortCharacters();
        if (this.state.filters.element.length > 0) {
            chars = chars.filter(char => this.state.filters.element.includes(char.element));
        }
        if (this.state.filters.weapon.length > 0) {
            chars = chars.filter(char => this.state.filters.weapon.includes(char.weapon));
        }
        if (this.state.filters.talent.length > 0) {
            chars = chars.filter(char => this.state.filters.talent.includes(char.materials.talents));
        }
        if (this.state.filters.bossMat.length > 0) {
            chars = chars.filter(char => this.state.filters.bossMat.includes(char.materials.bossMat));
        }
        return chars;
    }

    render() {
        return (
            <div className="ui container">
                <header className="ui centered block header">
                    <h1>Genshin Impact Reference Sheet</h1>
                </header>
                <Filter onClick={this.toggleButton} />
                <CharBrowser chars={this.filterCharacters()} />
            </div>
        )
    }
}

export default App;
