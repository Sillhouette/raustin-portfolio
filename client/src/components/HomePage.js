import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Header, Menu } from "semantic-ui-react";
import Filler from "./common/Filler";

const HomePage = props => (
  <Grid
    style={{ width: "100vw", height: "100vh" }}
    container
    divided="vertically"
    columns={4}
    stackable
    relaxed="very"
  >
    <Grid.Row stretched>
      <Grid.Column textAlign="center" verticalAlign="middle">
        <Menu.Item
          as={Link}
          to="/projects"
          name="projects"
          onClick={props.handleItemClick}
        >
          <Header inverted as="h1" textAlign="center">
            Projects
          </Header>
        </Menu.Item>
      </Grid.Column>
      <Grid.Column textAlign="center" verticalAlign="middle">
        <Menu.Item
          as={Link}
          to="/about"
          name="about"
          onClick={props.handleItemClick}
        >
          <Header inverted as="h1" textAlign="center">
            About
          </Header>
        </Menu.Item>
      </Grid.Column>
      <Grid.Column textAlign="center" verticalAlign="middle">
        <Menu.Item
          as={Link}
          to="/blog"
          name="blog"
          onClick={props.handleItemClick}
        >
          <Header inverted as="h1" textAlign="center">
            Blog
          </Header>
        </Menu.Item>
      </Grid.Column>
      <Grid.Column textAlign="center" verticalAlign="middle">
        <Menu.Item
          as={Link}
          to="/resume"
          name="resume"
          onClick={props.handleItemClick}
        >
          <Header inverted as="h1" textAlign="center">
            Resume
          </Header>
        </Menu.Item>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default HomePage;
