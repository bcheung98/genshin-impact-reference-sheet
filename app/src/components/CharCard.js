import React, {Component} from "react";

class CharCard extends Component {
    render() {
        let {name, rarity, element, weapon} = this.props.char;
        return (
            <div className="card">
                <div className="content">
                    <a className="header">
                        {name}
                    </a>
                    <div className="meta">
                        <span className="date">{rarity} Star</span>
                    </div>
                    <div className="description">
                        <p>{element}</p>
                        <p>{weapon}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CharCard;