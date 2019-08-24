//Start imports
import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Header,
  Segment,
  Image,
  Icon,
  Divider
} from "semantic-ui-react";

const Footer = props => (
  <Container fluid style={{ position: "absolute", bottom: 0 }}>
    <Segment attached="bottom" inverted color="grey" style={{ opacity: 0.8 }}>
      <Grid style={{ width: "100vw" }} divided="vertically" columns="equal">
        <Grid.Row style={{ padding: 5 }}>
          <Grid.Column
            textAlign="left"
            verticalAlign="top"
            style={{ margin: "0rem" }}
          >
            <Header
              as="h3"
              inverted
              textAlign="left"
              style={{ margin: "0rem", paddingBottom: 5 }}
            >
              Navigation
            </Header>
            <Link to="/" name="home" onClick={props.handleItemClick}>
              <Header as="h5" inverted textAlign="left">
                Home
              </Header>
            </Link>
            <Divider fitted hidden />
            <Link
              to="/projects"
              name="projects"
              onClick={props.handleItemClick}
            >
              <Header as="h5" inverted textAlign="left">
                Projects
              </Header>
            </Link>
            <Divider fitted hidden />
            <Link to="/resume" name="resume" onClick={props.handleItemClick}>
              <Header as="h5" inverted textAlign="left">
                Resume
              </Header>
            </Link>
            <Divider fitted hidden />
            <Link to="/about" name="about" onClick={props.handleItemClick}>
              <Header as="h5" inverted textAlign="left">
                About
              </Header>
            </Link>
            <Divider fitted hidden />
            <Link to="/blog" name="blog" onClick={props.handleItemClick}>
              <Header as="h5" inverted textAlign="left">
                Blog
              </Header>
            </Link>
          </Grid.Column>
          <Grid.Column textAlign="center" verticalAlign="top">
            <Header as="h3" inverted textAlign="center" style={{}}>
              Skills
            </Header>
            <Grid columns="equal">
              <Grid.Row style={{ padding: 5 }}>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Image
                    //ruby
                    verticalAlign="middle"
                    src={"https://i.imgur.com/hRTeTK8.png"}
                    size="mini"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Image
                    //HTML 5
                    verticalAlign="middle"
                    src={"https://i.imgur.com/EF2fDDn.png"}
                    size="mini"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Image
                    //Java
                    verticalAlign="middle"
                    src={"https://i.imgur.com/A0ziWcH.png"}
                    size="mini"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Image
                    //react
                    verticalAlign="middle"
                    src={"https://i.imgur.com/NbwgUhc.png"}
                    size="mini"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Image
                    //rails
                    verticalAlign="middle"
                    src={"https://i.imgur.com/xynxjpd.png"}
                    size="mini"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Image
                    //JS
                    verticalAlign="middle"
                    src={"https://i.imgur.com/Qd7AipT.png"}
                    size="mini"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Image
                    //SQL
                    verticalAlign="middle"
                    src={"https://i.imgur.com/PPz2u3d.png"}
                    size="mini"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Image
                    //Postgres
                    verticalAlign="middle"
                    src={"https://i.imgur.com/85GEmW8.png"}
                    size="mini"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{ padding: 5 }}>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Image
                    //Eclipse
                    verticalAlign="middle"
                    src={"https://i.imgur.com/AyUbKOk.png"}
                    size="mini"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Image
                    //Python
                    verticalAlign="middle"
                    src={"https://i.imgur.com/qf8GLPk.png"}
                    size="mini"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Image
                    //c++
                    verticalAlign="middle"
                    src={"https://i.imgur.com/RjWH8J4.png"}
                    size="mini"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Image
                    //React Native
                    verticalAlign="middle"
                    src={"https://i.imgur.com/wdzwsBA.png"}
                    size="mini"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Image
                    //Visual Basic
                    verticalAlign="middle"
                    src={"https://i.imgur.com/KHmN2E0.png"}
                    size="mini"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Image
                    //Redux
                    verticalAlign="middle"
                    src={"https://i.imgur.com/tqEWNUe.png"}
                    size="mini"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Image
                    //Git
                    verticalAlign="middle"
                    src={"https://i.imgur.com/cURXLc6.png"}
                    size="mini"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Image
                    //Github
                    verticalAlign="middle"
                    src={"https://i.imgur.com/WkyrtmR.png"}
                    size="mini"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column
            textAlign="center"
            verticalAlign="top"
            style={{ margin: "0rem" }}
          >
            <Header as="h3" inverted textAlign="right">
              Contact
            </Header>
            <Divider fitted hidden />
            <Header
              as="h5"
              inverted
              textAlign="right"
              style={{ margin: "0rem" }}
            >
              Raustin.Melchior@gmail.com&nbsp;&nbsp;
              <Icon size="mini" name="envelope" />
            </Header>
            <Divider fitted hidden />
            <Header
              as="h5"
              inverted
              textAlign="right"
              style={{ margin: "0rem" }}
            >
              818.268.5442&nbsp;&nbsp; <Icon size="mini" name="phone" />
            </Header>
            <Divider fitted hidden />
            <Header
              as="h5"
              inverted
              textAlign="right"
              style={{ margin: "0rem" }}
            >
              Los Angeles, CA&nbsp;&nbsp; <Icon size="mini" name="home" />
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Container>
);

export default Footer;
