import React, { Component } from "react";

class ElementFilter extends Component {
    render() {
        return (
            <div>
                <input className="element-filter" type="checkbox" value="pyro" onChange={this.props.setElementFilters} /> Pyro 
                <input className="element-filter" type="checkbox" value="hydro" onChange={this.props.setElementFilters} /> Hydro
                <input className="element-filter" type="checkbox" value="electro" onChange={this.props.setElementFilters} /> Electro 
                <input className="element-filter" type="checkbox" value="cryo" onChange={this.props.setElementFilters} /> Cryo
                <input className="element-filter" type="checkbox" value="anemo" onChange={this.props.setElementFilters} /> Anemo
                <input className="element-filter" type="checkbox" value="geo" onChange={this.props.setElementFilters} /> Geo
            </div>
        )
    }
}

export default ElementFilter;