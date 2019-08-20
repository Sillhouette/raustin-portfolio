import React from "react";
import { Container } from "semantic-ui-react";
import Filler from "./common/Filler";
import resume from "../Austin-Melchior-Resume.pdf";

const ResumePage = () => (
  <Container>
    <Filler num="3" />
    <embed src={resume} width="800px" height="1090px" />
    <Filler num="3" />
  </Container>
);

export default ResumePage;
