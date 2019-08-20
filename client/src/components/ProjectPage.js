import React from "react";
import project from "./MTG-Project-Preview.png";
import { Link } from "react-router-dom";
import { Grid, Image, Header, Menu } from "semantic-ui-react";
import Filler from "./common/Filler";

const ProjectPage = props => (
  <Grid
    style={{ width: "100vw", height: "100vh" }}
    container
    divided="vertically"
    columns={3}
  >
    <Grid.Row stretched>
      <Grid.Column textAlign="center" verticalAlign="middle">
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
      <Grid.Column textAlign="center" verticalAlign="middle">
        <Image style={{ objectFit: "cover" }} fluid src={project}>
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
        </Image>
      </Grid.Column>
      <Grid.Column textAlign="center" verticalAlign="middle">
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
);

export default ProjectPage;
