import React, { Component } from "react";

class WeaponFilter extends Component {
    render() {
        return (
            <div>
                {/* <input className="weapon-filter" type="checkbox" value="Sword" onChange={this.props.setWeaponFilters} /> Sword 
                <input className="weapon-filter" type="checkbox" value="Claymore" onChange={this.props.setWeaponFilters} /> Claymore
                <input className="weapon-filter" type="checkbox" value="Polearm" onChange={this.props.setWeaponFilters} /> Polearm 
                <input className="weapon-filter" type="checkbox" value="Bow" onChange={this.props.setWeaponFilters} /> Bow
                <input className="weapon-filter" type="checkbox" value="Catalyst" onChange={this.props.setWeaponFilters} /> Catalyst */}

                <img className="filter-off" id="sword-button" src={require("../assets/weapons/Weapon-class-sword-icon.png").default} alt="Sword" onClick={this.props.setWeaponFilters} />
                <img className="filter-off" id="claymore-button" src={require("../assets/weapons/Weapon-class-claymore-icon.png").default} alt="Claymore" onClick={this.props.setWeaponFilters} /> 
                <img className="filter-off" id="polearm-button" src={require("../assets/weapons/Weapon-class-polearm-icon.png").default} alt="Polearm" onClick={this.props.setWeaponFilters} />  
                <img className="filter-off" id="bow-button" src={require("../assets/weapons/Weapon-class-bow-icon.png").default} alt="Bow" onClick={this.props.setWeaponFilters} /> 
                <img className="filter-off" id="catalyst-button" src={require("../assets/weapons/Weapon-class-catalyst-icon.png").default} alt="Catalyst" onClick={this.props.setWeaponFilters} /> 
            </div>
        )
    }
}

export default WeaponFilter;