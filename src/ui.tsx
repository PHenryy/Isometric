import * as React from "react";
import * as ReactDOM from "react-dom";
import "./ui.css";

declare function require(path: string): any;

class App extends React.Component {
  textbox: HTMLInputElement;

  onCreate = () => {
    parent.postMessage({ pluginMessage: { type: "create-rectangles" } }, "*");
  };

  // onCancel = () => {
  //     parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  // }

  print() {
    console.log(figma);
  }

  render() {
    return (
      <div>
        <button className="bg-green-400" onClick={this.onCreate}>
          TEST
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react-page"));
