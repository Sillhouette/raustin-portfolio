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

const headerStyle = {
  textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
};

const HomePage = props => (
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
              //justifyContent: "center",
              //alignItems: "center",
              overflow: "hidden",
              margin: 0
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
              src={resume}
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
              src={books}
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
              id="project4-img"
              className="transition"
              style={{
                flexShrink: 0,
                objectFit: "cover",
                objectPosition: "center",
                height: "100vh"
              }}
              fluid
              src={setup}
            />
          </Item>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Container fluid>
      <Grid
        style={{ width: "100vw", height: "100vh" }}
        divided="vertically"
        columns={4}
      >
        <Grid.Row stretched>
          <Grid.Column
            textAlign="center"
            verticalAlign="middle"
            stretched
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
              <Header
                inverted
                size="large"
                className="largeHeader"
                textAlign="center"
                style={headerStyle}
              >
                Projects
              </Header>
              <Header
                inverted
                size="medium"
                className="mediumHeader"
                textAlign="center"
                style={headerStyle}
              >
                Projects
              </Header>
            </Menu.Item>
          </Grid.Column>
          <Grid.Column
            textAlign="center"
            verticalAlign="middle"
            stretched
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
              <Header
                inverted
                size="large"
                className="largeHeader"
                textAlign="center"
                style={headerStyle}
              >
                Resume
              </Header>
              <Header
                inverted
                size="medium"
                className="mediumHeader"
                textAlign="center"
                style={headerStyle}
              >
                Resume
              </Header>
            </Menu.Item>
          </Grid.Column>
          <Grid.Column
            textAlign="center"
            verticalAlign="middle"
            stretched
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
              <Header
                inverted
                size="large"
                className="largeHeader"
                textAlign="center"
                style={headerStyle}
              >
                About
              </Header>
              <Header
                inverted
                size="medium"
                className="mediumHeader"
                textAlign="center"
                style={headerStyle}
              >
                About
              </Header>
            </Menu.Item>
          </Grid.Column>
          <Grid.Column
            textAlign="center"
            verticalAlign="middle"
            stretched
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
              <Header
                inverted
                size="large"
                className="largeHeader"
                textAlign="center"
                style={headerStyle}
              >
                Blog
              </Header>
              <Header
                inverted
                size="medium"
                className="mediumHeader"
                textAlign="center"
                style={headerStyle}
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
