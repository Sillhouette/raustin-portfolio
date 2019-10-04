import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { SizeMe } from "react-sizeme";
import { Icon, Divider } from "semantic-ui-react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "./pdfs/Austin Melchior - Resume.pdf";
import "./ResumePage.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class ResumePage extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  removeTextLayerOffset = () => {
    const textLayers = document.querySelectorAll(
      ".react-pdf__Page__textContent"
    );
    textLayers.forEach(layer => {
      const { style } = layer;
      style.top = "0";
      style.left = "0";
      style.transform = "";
    });
  };

  render() {
    const { pageNumber } = this.state;
    return (
      <Container text id="main-container">
        <a
          className="ui circular icon right labeled button"
          href="https://austinmelchior.com/files/austin-melchior-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Austin Melchior - Resume"
        >
          <Icon name="file alternate outline" />
          Download Resume
          <div id="sub-header">(with working links)</div>
        </a>
        <Divider />
        <SizeMe
          monitorHeight
          monitorWidth
          refreshRate={128}
          refreshMode={"throttle"}
          render={({ size }) => (
            <div>
              <Document
                file={resume}
                onLoadSuccess={this.onDocumentLoadSuccess}
              >
                <Page
                  height={size.height}
                  width={size.width}
                  onLoadSuccess={this.removeTextLayerOffset}
                  pageNumber={pageNumber}
                />
              </Document>
            </div>
          )}
        />
      </Container>
    );
  }
}

export default ResumePage;
