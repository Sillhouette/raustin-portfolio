import React from "react";
import { Container } from "semantic-ui-react";
import Filler from "../common/Filler";
import { Document } from "react-pdf";
import resume from "./pdfs/Austin-Melchior-Resume.pdf";

const ResumePage = () => (
  <Container>
    <Filler num="3" />
    <div style={{ width: 600 }}>
      <Document
        file={resume}
        onLoadSuccess={this.onDocumentLoadSuccess && console.log("PDF LOADED")}
      ></Document>
    </div>
    <Filler num="3" />
  </Container>
);

export default ResumePage;
