import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { SizeMe } from "react-sizeme";
import { Button, Icon, Header } from "semantic-ui-react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "./pdfs/Austin-Melchior-Resume.pdf";

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
      <Container text style={{ padding: 20 }}>
        <a
          className="ui circular icon right labeled button"
          href="/pdfs/Austin-Melchior-Resume.pdf"
          download="Austin-Melchior-Resume"
          style={{ padding: 15 }}
        >
          <Icon name="file alternate outline" />
          Download Resume
        </a>
        <Header sub style={{ color: "white" }}>
          (with working links)
        </Header>
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
