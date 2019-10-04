import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Header, Menu, Image, Item } from "semantic-ui-react";
import setup from "./images/setup.jpg";
import laptop from "./images/laptop.jpg";
import resume from "./images/resume.jpeg";
import books from "./images/books.jpeg";
import setupWeb from "./images/setup.webp";
import laptopWeb from "./images/laptop.webp";
import resumeWeb from "./images/resume.webp";
import booksWeb from "./images/books.webp";
import "./HomePage.css";

const handleTransition = id => {
  let target = document.getElementById(id);
  if (target.classList.contains("visible")) {
    target.classList.remove("visible");
  } else {
    target.classList.add("visible");
  }
};

const HomePage = props => (
  <div className="page">
    <Grid columns="equal" id="home-background-grid" className="home-grid">
      <Grid.Row>
        <Grid.Column className="home-grid-column">
          <Item className="background-grid-item">
            <picture className="transition" id="project1-img">
              <source
                className="background-image"
                type="image/webp"
                srcSet={laptopWeb}
              />
              <source
                className="background-image"
                type="image/jpg"
                srcSet={laptop}
              />
              <Image alt={""} className="background-image" fluid src={laptop} />
            </picture>
          </Item>
        </Grid.Column>
        <Grid.Column className="home-grid-column">
          <Item className="background-grid-item">
            <picture className="transition" id="project2-img">
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
              <Image alt={""} className="background-image" fluid src={resume} />
            </picture>
          </Item>
        </Grid.Column>
        <Grid.Column className="home-grid-column">
          <Item className="background-grid-item">
            <picture className="transition" id="project3-img">
              <source
                className="background-image"
                type="image/webp"
                srcSet={booksWeb}
              />
              <source
                className="background-image"
                type="image/jpg"
                srcSet={books}
              />
              <Image alt={""} className="background-image" fluid src={books} />
            </picture>
          </Item>
        </Grid.Column>
        <Grid.Column className="home-grid-column">
          <Item className="background-grid-item">
            <picture className="transition" id="project4-img">
              <source
                className="background-image"
                type="image/webp"
                srcSet={setupWeb}
              />
              <source
                className="background-image"
                type="image/jpg"
                srcSet={setup}
              />
              <Image alt={""} className="background-image" fluid src={setup} />
            </picture>
          </Item>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Container fluid>
      <Grid className="home-grid" divided="vertically" columns="equal">
        <Grid.Row>
          <Grid.Column
            textAlign="center"
            verticalAlign="middle"
            className="home-grid-column"
          >
            <Menu.Item
              as={Link}
              to="/projects"
              name="projects"
              onMouseOver={() => handleTransition(`project1-img`)}
              onMouseOut={() => handleTransition(`project1-img`)}
              onClick={props.handleItemClick}
            >
              <Header
                inverted
                size="large"
                className="large-header home-header"
                textAlign="center"
              >
                Projects
              </Header>
              <Header
                inverted
                size="medium"
                className="medium-header home-header"
                textAlign="center"
              >
                Projects
              </Header>
            </Menu.Item>
          </Grid.Column>
          <Grid.Column
            textAlign="center"
            verticalAlign="middle"
            className="home-grid-column"
          >
            <Menu.Item
              as={Link}
              to="/resume"
              name="resume"
              onMouseOver={() => handleTransition(`project2-img`)}
              onMouseOut={() => handleTransition(`project2-img`)}
              onClick={props.handleItemClick}
            >
              <Header
                inverted
                size="large"
                className="large-header home-header"
                textAlign="center"
              >
                Resume
              </Header>
              <Header
                inverted
                size="medium"
                className="medium-header home-header"
                textAlign="center"
              >
                Resume
              </Header>
            </Menu.Item>
          </Grid.Column>
          <Grid.Column
            textAlign="center"
            verticalAlign="middle"
            className="home-grid-column"
          >
            <Menu.Item
              as={Link}
              to="/about"
              name="about"
              onMouseOver={() => handleTransition(`project3-img`)}
              onMouseOut={() => handleTransition(`project3-img`)}
              onClick={props.handleItemClick}
            >
              <Header
                inverted
                size="large"
                className="large-header home-header"
                textAlign="center"
              >
                About
              </Header>
              <Header
                inverted
                size="medium"
                className="medium-header home-header"
                textAlign="center"
              >
                About
              </Header>
            </Menu.Item>
          </Grid.Column>
          <Grid.Column
            textAlign="center"
            verticalAlign="middle"
            className="home-grid-column"
          >
            <Menu.Item
              as={Link}
              to="/blog"
              name="blog"
              onMouseOver={() => handleTransition(`project4-img`)}
              onMouseOut={() => handleTransition(`project4-img`)}
              onClick={props.handleItemClick}
            >
              <Header
                inverted
                size="large"
                className="large-header home-header"
                textAlign="center"
              >
                Blog
              </Header>
              <Header
                inverted
                size="medium"
                className="medium-header home-header"
                textAlign="center"
              >
                Blog
              </Header>
            </Menu.Item>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

export default HomePage;
