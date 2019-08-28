import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import data from './xls.PDF';

class PDFComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numPages: null,
      pageNumber: 5,
    };
  }
  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <a href="#" >
          <img src="./images/test.jpg" width="100" height="100" display="block" alt="image"/>
        </a>
        <div id='contentDiv'>
                  <Document
                      file={data}
                      onLoadSuccess={this.onDocumentLoad}>
                          <Page pageNumber={pageNumber} />
                  </Document>
                  <p>Page {pageNumber} of {numPages}</p>
        </div>
      </div>
    );
  }
}
export default PDFComponent;
