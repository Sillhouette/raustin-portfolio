import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { SizeMe } from "react-sizeme";
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
        <form method="get" action={resume}>
          <Button circular icon type="submit" labelPosition="right">
            <Icon name="document" />
            View Live
          </Button>
        </form>
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
