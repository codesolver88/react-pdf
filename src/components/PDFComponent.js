import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import data from "./xls.PDF";

class PDFComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 5,
    };
  }
  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };

  prevHandler = () => {
    this.setState({ pageNumber: this.state.pageNumber - 1 });
  };

  nextHandler = () => {
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <div id="contentDiv">
          <Document file={data} onLoadSuccess={this.onDocumentLoad}>
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <button onClick={this.prevHandler}>Previous</button>
          <button onClick={this.nextHandler}>Next</button>
        </div>
      </div>
    );
  }
}
export default PDFComponent;
