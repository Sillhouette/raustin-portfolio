import React from "react";
import { Grid, Container } from "semantic-ui-react";
import ImageColumn from './ImageColumn';
import UnderlayColumn from './UnderlayColumn'
import mtg from "./images/mtg-wizards-colors.jpg";
import mtgWeb from "./images/mtg-wizards-colors.webp";
import gamer from "./images/gamer.jpeg";
import gamerWeb from "./images/gamer.webp";
import "./ProjectPage.css";

const ProjectPage = props => (
  <div className="page">
    <Grid
      stretched
      columns="equal"
      id="project-background-grid"
      className="project-grid"
    >
      <Grid.Row className="grid-row" stretched>
        <ImageColumn 
          jpg={mtg}
          webp={mtgWeb}
          imageId="project1-img"
        />
        <ImageColumn 
          jpg={gamer}
          webp={gamerWeb}
          imageId="project2-img"
        />
      </Grid.Row>
    </Grid>
    <Container fluid>
      <Grid className="project-grid" columns="equal" stretched>
        <Grid.Row stretched>
          <UnderlayColumn 
            name="MTG-Manager-Pro"
            imageId="project1-img"
            onClick={props.handleItemClick}
          />
          <UnderlayColumn 
            name="Stream-Source"
            imageId="project2-img"
            onClick={props.handleItemClick}
          />
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

export default ProjectPage;
