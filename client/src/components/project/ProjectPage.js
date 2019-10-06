import React from "react";
import mtg from "./images/mtg-wizards-colors.jpg";
import resume from "./images/gamer.jpeg";
import mtgWeb from "./images/mtg-wizards-colors.webp";
import resumeWeb from "./images/gamer.webp";
import { Link } from "react-router-dom";
import { Grid, Image, Header, Menu, Item, Container } from "semantic-ui-react";
import "./ProjectPage.css";

const handleTransition = id => {
  let target = document.getElementById(id);
  if (target.classList.contains("visible")) {
    target.classList.remove("visible");
  } else {
    target.classList.add("visible");
  }
};

const ProjectPage = props => (
  <div className="page">
    <Grid
      stretched
      columns="equal"
      id="project-background-grid"
      className="project-grid"
    >
      <Grid.Row className="grid-row" stretched>
        <Grid.Column className="zero-padding grid-column" stretched>
          <Item className="background-image-container">
            <picture className="transition" id="project2-img">
              <source
                className="background-image"
                type="image/webp"
                srcSet={mtgWeb}
              />
              <source
                className="background-image"
                type="image/jpg"
                srcSet={mtg}
              />
              <Image alt="" className="background-image" fluid src={mtg} />
            </picture>
          </Item>
        </Grid.Column>
        <Grid.Column className="zero-padding grid-column" stretched>
          <Item className="background-image-container">
            <picture className="transition" id="project3-img">
              <source
                className="background-image"
                type="image/webp"
                srcSet={resumeWeb}
              />
              <source
                className="background-image"
                type="image/jpg"
                srcSet={resume}
              />
              <Image alt="" className="background-image" fluid src={resume} />
            </picture>
          </Item>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Container fluid>
      <Grid className="project-grid" columns="equal" stretched>
        <Grid.Row stretched>
          <Grid.Column
            textAlign="center"
            verticalAlign="middle"
            className="zero-padding"
          >
            <Menu.Item
              as={Link}
              to="/projects/MTG-Manager-Pro"
              name="projects"
              onMouseOver={() => handleTransition(`project2-img`)}
              onMouseOut={() => handleTransition(`project2-img`)}
              onClick={props.handleItemClick}
            >
              <Header
                inverted
                size="huge"
                className="large-header header-style"
                textAlign="center"
              >
                MTG Manager Pro
              </Header>
              <Header
                inverted
                size="medium"
                className="medium-header header-style"
                textAlign="center"
              >
                MTG Manager Pro
              </Header>
            </Menu.Item>
          </Grid.Column>
          <Grid.Column
            textAlign="center"
            verticalAlign="middle"
            className="zero-padding"
          >
            <Menu.Item
              as={Link}
              to="/projects/Stream-Source"
              name="projects"
              onMouseOver={() => handleTransition(`project3-img`)}
              onMouseOut={() => handleTransition(`project3-img`)}
              onClick={props.handleItemClick}
            >
              <Header
                inverted
                size="huge"
                className="large-header header-style"
                textAlign="center"
              >
                Stream Source
              </Header>
              <Header
                inverted
                size="medium"
                className="medium-header header-style"
                textAlign="center"
              >
                Stream Source
              </Header>
            </Menu.Item>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

export default ProjectPage;
