import React from "react";
import { Container } from "semantic-ui-react";

const Filler = props => {
  return <Container>{createFiller(props)}</Container>;
};

const createFiller = props => {
  let lines = [];
  for (let i = 0; i < props.num; i++) {
    lines.push(<br key={i} />);
  }
  return lines;
};

export default Filler;
