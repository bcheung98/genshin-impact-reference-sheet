import React, {Component} from "react";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <header className="ui block header">
          <h1>Genshin Impact Reference Sheet</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="five wide column">
              Characters
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
