import React, { Component } from "react";

class ElementFilter extends Component {
    render() {
        return (
            <div>
                <input className="element-filter" type="checkbox" value="Pyro" onChange={this.props.setElementFilters} /> Pyro 
                <input className="element-filter" type="checkbox" value="Hydro" onChange={this.props.setElementFilters} /> Hydro
                <input className="element-filter" type="checkbox" value="Electro" onChange={this.props.setElementFilters} /> Electro 
                <input className="element-filter" type="checkbox" value="Cryo" onChange={this.props.setElementFilters} /> Cryo
                <input className="element-filter" type="checkbox" value="Anemo" onChange={this.props.setElementFilters} /> Anemo
                <input className="element-filter" type="checkbox" value="Geo" onChange={this.props.setElementFilters} /> Geo
            </div>
        )
    }
}

export default ElementFilter;