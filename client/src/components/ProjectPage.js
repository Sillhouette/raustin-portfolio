import React from "react";
import { Link } from "react-router-dom";
import project from "./MTG-Project-Preview.png";
import { Container, Grid, Label, Image } from "semantic-ui-react";

const ProjectPage = () => (
  <Grid
    style={{ width: "100vw", height: "100vh" }}
    container
    //padded="false"
    divided="vertically"
    columns={3}
  >
    <Grid.Row stretched>
      <Grid.Column>
        <Image style={{ "object-fit": "cover" }} fluid src={project} />
      </Grid.Column>
      <Grid.Column>2</Grid.Column>
      <Grid.Column>3</Grid.Column>
    </Grid.Row>
  </Grid>
);

export default ProjectPage;
