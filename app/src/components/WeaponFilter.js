import React, { Component } from "react";

class WeaponFilter extends Component {
    render() {
        return (
            <div>
                <input className="weapon-filter" type="checkbox" value="Sword" onChange={this.props.setWeaponFilters} /> Sword 
                <input className="weapon-filter" type="checkbox" value="Claymore" onChange={this.props.setWeaponFilters} /> Claymore
                <input className="weapon-filter" type="checkbox" value="Polearm" onChange={this.props.setWeaponFilters} /> Polearm 
                <input className="weapon-filter" type="checkbox" value="Bow" onChange={this.props.setWeaponFilters} /> Bow
                <input className="weapon-filter" type="checkbox" value="Catalyst" onChange={this.props.setWeaponFilters} /> Catalyst
            </div>
        )
    }
}

export default WeaponFilter;