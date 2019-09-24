import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Header, Menu, Image, Item } from "semantic-ui-react";
import setup from "./images/setup.jpg";
import laptop from "./images/laptop.jpg";
import resume from "./images/resume.jpeg";
import books from "./images/books.jpeg";
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
    <Grid
      stretched
      columns="equal"
      id="home-background-grid"
      className="home-grid"
    >
      <Grid.Row stretched>
        <Grid.Column className="home-grid-column" stretched>
          <Item className="background-grid-item">
            <Image
              id="project1-img"
              alt={""}
              className="transition background-image"
              fluid
              src={laptop}
            />
          </Item>
        </Grid.Column>
        <Grid.Column className="home-grid-column" stretched>
          <Item className="background-grid-item">
            <Image
              id="project2-img"
              className="transition background-image"
              alt={""}
              fluid
              src={resume}
            />
          </Item>
        </Grid.Column>
        <Grid.Column className="home-grid-column" stretched>
          <Item className="background-grid-item">
            <Image
              id="project3-img"
              alt={""}
              className="transition background-image"
              fluid
              src={books}
            />
          </Item>
        </Grid.Column>
        <Grid.Column className="home-grid-column" stretched>
          <Item className="background-grid-item">
            <Image
              id="project4-img"
              alt={""}
              className="transition background-image"
              fluid
              src={setup}
            />
          </Item>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Container fluid>
      <Grid className="home-grid" divided="vertically" columns="equal">
        <Grid.Row stretched>
          <Grid.Column
            textAlign="center"
            verticalAlign="middle"
            stretched
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
            stretched
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
            stretched
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
            stretched
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
