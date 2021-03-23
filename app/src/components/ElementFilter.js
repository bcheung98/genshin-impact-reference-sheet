import React, { Component } from "react";

class ElementFilter extends Component {
    render() {
        return (
            <div className="filter">
                <img className="filter-off" id="pyro-button" src={require("../assets/elements/Element_Pyro.png").default} alt="Pyro" onClick={this.props.setElementFilters} />
                <img className="filter-off" id="hydro-button" src={require("../assets/elements/Element_Hydro.png").default} alt="Hydro" onClick={this.props.setElementFilters} /> 
                <img className="filter-off" id="electro-button" src={require("../assets/elements/Element_Electro.png").default} alt="Electro" onClick={this.props.setElementFilters} />  
                <img className="filter-off" id="cryo-button" src={require("../assets/elements/Element_Cryo.png").default} alt="Cryo" onClick={this.props.setElementFilters} /> 
                <img className="filter-off" id="anemo-button" src={require("../assets/elements/Element_Anemo.png").default} alt="Anemo" onClick={this.props.setElementFilters} /> 
                <img className="filter-off" id="geo-button" src={require("../assets/elements/Element_Geo.png").default} alt="Geo" onClick={this.props.setElementFilters} /> 
            </div>
        )
    }
}

export default ElementFilter;