import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Header, Menu, Image } from "semantic-ui-react";
import typewriter from "./images/typewriter.jpeg";
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
  <>
    <Grid
      stretched
      stackable
      columns={4}
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
          <Container
            fluid
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
          </Container>
        </Grid.Column>
        <Grid.Column style={{ padding: 0 }} stretched>
          <Container
            fluid
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
              src={resume}
            />
          </Container>
        </Grid.Column>
        <Grid.Column style={{ padding: 0 }} stretched>
          <Container
            fluid
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
              src={books}
            />
          </Container>
        </Grid.Column>
        <Grid.Column style={{ padding: 0 }} stretched>
          <Container
            fluid
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden"
            }}
          >
            <Image
              id="project4-img"
              className="transition"
              style={{
                flexShrink: 0,
                objectFit: "cover",
                objectPosition: "right",
                height: "100vh"
              }}
              fluid
              src={typewriter}
            />
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Container fluid>
      <Grid
        style={{ width: "100vw", height: "100vh" }}
        divided="vertically"
        columns={4}
        stackable
      >
        <Grid.Row stretched>
          <Grid.Column
            textAlign="center"
            verticalAlign="middle"
            style={{ padding: 0 }}
          >
            <Menu.Item
              as={Link}
              to="/projects"
              name="projects"
              onMouseOver={() => handleTransition(`project1-img`)}
              onMouseOut={() => handleTransition(`project1-img`)}
              onClick={props.handleItemClick}
            >
              <Header inverted as="h1" textAlign="center">
                Projects
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
              to="/resume"
              name="resume"
              onMouseOver={() => handleTransition(`project2-img`)}
              onMouseOut={() => handleTransition(`project2-img`)}
              onClick={props.handleItemClick}
            >
              <Header inverted as="h1" textAlign="center">
                Resume
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
              to="/about"
              name="about"
              onMouseOver={() => handleTransition(`project3-img`)}
              onMouseOut={() => handleTransition(`project3-img`)}
              onClick={props.handleItemClick}
            >
              <Header inverted as="h1" textAlign="center">
                About
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
              to="/blog"
              name="blog"
              onMouseOver={() => handleTransition(`project4-img`)}
              onMouseOut={() => handleTransition(`project4-img`)}
              onClick={props.handleItemClick}
            >
              <Header inverted as="h1" textAlign="center">
                Blog
              </Header>
            </Menu.Item>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </>
);

export default HomePage;
