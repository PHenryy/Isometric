import * as React from "react";
import * as ReactDOM from "react-dom";
import "./ui.css";

declare function require(path: string): any;

class App extends React.Component {
  textbox: HTMLInputElement;

  // onCreate = () => {
  //     const count = parseInt(this.textbox.value, 10)
  //     parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*')
  // }

  // onCancel = () => {
  //     parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  // }

  render() {
    return (
      <div>
        <button className="bg-green-400">TEST</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react-page"));
