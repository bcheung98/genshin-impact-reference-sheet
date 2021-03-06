import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Filter from "./Filters";
import CharBrowser from "./CharBrowser";
import Error from "./Error";

class App extends Component {

    state = {
        success: true,
        cards: "small",
        chars: [],
        filters: {
            element: [],
            weapon: [],
            talent: [],
            bossMat: []
        }
    }

    componentDidMount() {
        fetch("https://bcheung98.github.io/genshin-impact-character-db/characters.json")
            .then(r => r.json())
            .then(chars => this.setState({ chars }))
            .catch(() => this.setState({ success: false }));
    }

    sortCharacters = () => {
        return [...this.state.chars].sort((a, b) => a.name < b.name ? -1 : 1)
    }

    toggleCards = () => {
        this.state.cards === "big" ? this.setState({ cards: "small" }) : this.setState({ cards: "big" });
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
                <div className="card-toggle">
                    <label className="switch">
                        <input type="checkbox" onClick={this.toggleCards} />
                        <span className="slider round"></span>
                    </label>
                    <p>Show Large Cards</p>
                </div>
                <Filter onClick={this.toggleButton} />
                {this.state.success ? <CharBrowser chars={this.filterCharacters()} cards={this.state.cards} /> : <Error />}
                <footer className="ui centered block header">
                    <p>Genshin Impact??? is a registered trademark of MiHoYo Co., Ltd.</p>
                    <p>Images and data ??MiHoYo Co., Ltd.</p>
                    <p>This website was made for my own education and research into making React applications.</p>
                </footer>
            </div>
        )
    }
}

export default App;
