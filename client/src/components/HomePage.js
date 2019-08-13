import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Header, Menu } from "semantic-ui-react";
import Filler from "./common/Filler";

const HomePage = props => (
  <Container>
    <Grid style={{ width: "100vw", height: "100vh" }} container columns={4}>
      <Grid.Row textAlign="center" stretched>
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
          <Filler num="20" />
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
          <Filler num="20" />
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
          <Filler num="20" />
        </Grid.Column>
        <Grid.Column textAlign="center" verticalAlign="middle">
          <Menu.Item
            as={Link}
            to="/contact"
            name="contact"
            onClick={props.handleItemClick}
          >
            <Header inverted as="h1" textAlign="center">
              Contact
            </Header>
          </Menu.Item>
          <Filler num="20" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default HomePage;
