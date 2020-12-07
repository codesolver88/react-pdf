import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import PDFComponent from "./components/PDFComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="pdfContainer">
          <PDFComponent />
        </div>
      </div>
    );
  }
}

export default App;
