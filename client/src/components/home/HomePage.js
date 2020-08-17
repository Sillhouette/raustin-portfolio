import React from "react";
import { Container, Grid } from "semantic-ui-react";
import ImageColumn from './ImageColumn'
import UnderlayColumn from './UnderlayColumn'
import setup from "./images/setup.jpg";
import laptop from "./images/laptop.jpg";
import resume from "./images/resume.jpeg";
import books from "./images/books.jpeg";
import setupWeb from "./images/setup.webp";
import laptopWeb from "./images/laptop.webp";
import resumeWeb from "./images/resume.webp";
import booksWeb from "./images/books.webp";
import "./HomePage.css";

const HomePage = props => (
  <div className="page">
    <Grid columns="equal" id="home-background-grid" className="home-grid">
      <Grid.Row className="grid-row">
        <ImageColumn 
          imageId="project1-img" 
          png={laptop}
          webp={laptopWeb}
        />
        <ImageColumn 
          imageId="project2-img" 
          png={resume}
          webp={resumeWeb}
        />
        <ImageColumn 
          imageId="project3-img" 
          png={books}
          webp={booksWeb}
        />
        <ImageColumn 
          imageId="project4-img" 
          png={setup}
          webp={setupWeb}
        />
      </Grid.Row>
    </Grid>
    <Container fluid>
      <Grid className="home-grid" divided="vertically" columns="equal">
        <Grid.Row>
          <UnderlayColumn 
            name="projects"
            imageId="project1-img"
            onClick={props.handleItemClick}
          />
          <UnderlayColumn 
            name="resume"
            imageId="project2-img"
            onClick={props.handleItemClick}
          />
          <UnderlayColumn 
            name="about"
            imageId="project3-img"
            onClick={props.handleItemClick}
          />
          <UnderlayColumn 
            name="blog"
            imageId="project4-img"
            onClick={props.handleItemClick}
          />
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

export default HomePage;
