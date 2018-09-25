import React, { Component } from "react";
import "./App.css";
import SimpleAppBar from "./SimpleAppBar.jsx";
import CheckBoxList from "./CheckBoxList.jsx";
import ButtonAdd from "./ButtonAdd.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SimpleAppBar title="Hello" />
        </header>
        <h1 className="App-title">My To-Dos</h1>
        <CheckBoxList itemText="Item XY" />
        <ButtonAdd />
      </div>
    );
  }
}

export default App;
