import React from "react";
import mtg from "./images/mtg-wizards-colors.jpg";
import laptop from "./images/newspaper.jpeg";
import resume from "./images/gamer.jpeg";
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

const headerStyle = {
  textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
};

const ProjectPage = props => (
  <div className="page">
    <Grid
      stretched
      columns="equal"
      style={{
        position: "absolute",
        zIndex: "-2",
        height: "100vh",
        width: "100vw",
        padding: 0,
        top: "-1px"
      }}
    >
      <Grid.Row style={{ width: "100vw" }} stretched>
        <Grid.Column style={{ padding: 0 }} stretched>
          <Item
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden"
            }}
          >
            <Image
              id="project1-img"
              className="transition"
              style={{
                flexShrink: 0,
                objectFit: "cover",
                height: "100vh"
              }}
              fluid
              src={laptop}
            />
          </Item>
        </Grid.Column>
        <Grid.Column style={{ padding: 0 }} stretched>
          <Item
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden"
            }}
          >
            <Image
              id="project2-img"
              className="transition"
              style={{
                flexShrink: 0,
                objectFit: "cover",
                height: "100vh"
              }}
              fluid
              src={mtg}
            />
          </Item>
        </Grid.Column>
        <Grid.Column style={{ padding: 0 }} stretched>
          <Item
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden"
            }}
          >
            <Image
              id="project3-img"
              className="transition"
              style={{
                flexShrink: 0,
                objectFit: "cover",
                height: "100vh"
              }}
              fluid
              src={resume}
            />
          </Item>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Container fluid>
      <Grid style={{ width: "100vw", height: "100vh" }} columns={3} stretched>
        <Grid.Row style={{ width: "100vw" }} stretched>
          <Grid.Column
            style={{ padding: 0 }}
            stretched
            textAlign="center"
            verticalAlign="middle"
          >
            <Menu.Item
              as={Link}
              to="/projects/News-CLI"
              name="projects"
              onMouseOver={() => handleTransition(`project1-img`)}
              onMouseOut={() => handleTransition(`project1-img`)}
              onClick={props.handleItemClick}
            >
              <Header
                inverted
                size="huge"
                className="largeHeader"
                textAlign="center"
                style={headerStyle}
              >
                News CLI
              </Header>
              <Header
                inverted
                size="medium"
                className="mediumHeader"
                textAlign="center"
              >
                News CLI
              </Header>
            </Menu.Item>
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
              onMouseOver={() => handleTransition(`project2-img`)}
              onMouseOut={() => handleTransition(`project2-img`)}
              onClick={props.handleItemClick}
            >
              <Header
                inverted
                size="huge"
                className="largeHeader"
                textAlign="center"
                style={headerStyle}
              >
                MTG Manager Pro
              </Header>
              <Header
                inverted
                size="medium"
                className="mediumHeader"
                textAlign="center"
                style={headerStyle}
              >
                MTG Manager Pro
              </Header>
            </Menu.Item>
          </Grid.Column>
          <Grid.Column
            textAlign="center"
            verticalAlign="middle"
            style={{ padding: 0 }}
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
                className="largeHeader"
                textAlign="center"
                style={headerStyle}
              >
                Stream Source
              </Header>
              <Header
                inverted
                size="medium"
                className="mediumHeader"
                textAlign="center"
                style={headerStyle}
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
