import React from "react";
import project from "./mtg.png";
import { Link } from "react-router-dom";
import { Grid, Image, Header, Menu, Container } from "semantic-ui-react";

const ProjectPage = props => (
  <Container fluid>
    <Grid
      style={{ width: "100vw", height: "100vh" }}
      divided="vertically"
      columns={3}
      stackable
    >
      <Grid.Row stretched>
        <Grid.Column
          textAlign="center"
          verticalAlign="middle"
          style={{ padding: 0 }}
        >
          <Image style={{ objectFit: "cover" }} fluid src={project}>
            <Menu.Item
              as={Link}
              to="/projects/Crowder-News-CLI"
              name="projects"
              onClick={props.handleItemClick}
            >
              <Header inverted as="h1" textAlign="center">
                Crowder News CLI
              </Header>
            </Menu.Item>
          </Image>
        </Grid.Column>
        <Grid.Column
          textAlign="center"
          verticalAlign="middle"
          style={{
            padding: 0
          }}
        >
          <Menu.Item
            as={Link}
            to="/projects/MTG-Manager-Pro"
            name="projects"
            onClick={props.handleItemClick}
          >
            <Header inverted as="h1" textAlign="center">
              MTG Manager Pro
            </Header>
          </Menu.Item>
        </Grid.Column>
        <Grid.Column
          textAlign="center"
          verticalAlign="middle"
          style={{ padding: 0 }}
        >
          <Image style={{ objectFit: "cover" }} fluid src={project}>
            <Menu.Item
              as={Link}
              to="/projects/Stream-Source"
              name="projects"
              onClick={props.handleItemClick}
            >
              <Header inverted as="h1" textAlign="center">
                Stream Source
              </Header>
            </Menu.Item>
          </Image>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default ProjectPage;
