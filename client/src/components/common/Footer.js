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
  Divider,
  Popup,
  Menu,
  Item
} from "semantic-ui-react";
import "./Footer.css";

const style = {
  borderRadius: "10px",
  opacity: 0.8
};

const Footer = props => (
  <Container fluid style={{ position: "absolute", bottom: 0 }}>
    <Segment
      attached="bottom"
      inverted
      style={{ backgroundColor: `rgba(89, 89, 89, 0.80 )` }}
    >
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
            <Menu.Item
              as={Link}
              to="/"
              name="home"
              onClick={props.handleItemClick}
              style={{ color: "white", paddingLeft: "10px" }}
            >
              Home
            </Menu.Item>
            <Divider fitted hidden />
            <Menu.Item
              as={Link}
              to="/projects"
              name="projects"
              onClick={props.handleItemClick}
              style={{ color: "white", paddingLeft: "10px" }}
            >
              Projects
            </Menu.Item>
            <Divider fitted hidden />
            <Menu.Item
              as={Link}
              to="/resume"
              name="resume"
              onClick={props.handleItemClick}
              style={{ color: "white", paddingLeft: "10px" }}
            >
              Resume
            </Menu.Item>
            <Divider fitted hidden />
            <Menu.Item
              as={Link}
              to="/about"
              name="about"
              onClick={props.handleItemClick}
              style={{ color: "white", paddingLeft: "10px" }}
            >
              About
            </Menu.Item>
            <Divider fitted hidden />
            <Menu.Item
              as={Link}
              to="/blog"
              name="blog"
              onClick={props.handleItemClick}
              style={{ color: "white", paddingLeft: "10px" }}
            >
              Blog
            </Menu.Item>
          </Grid.Column>
          <Grid.Column
            textAlign="center"
            id="center-column"
            verticalAlign="top"
          >
            {/*<Header as="h3" inverted textAlign="center" style={{}}>
              Skills
            </Header>*/}
            <Grid columns="equal">
              <Grid.Row style={{ padding: 5 }}>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  {/*}
                  <Popup
                    trigger={
                      <Image
                        //ruby
                        alt={"Ruby"}
                        verticalAlign="middle"
                        src={"https://i.imgur.com/hRTeTK8.png"}
                        size="mini"
                      />
                    }
                    header="Ruby"
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Popup
                    trigger={
                      <Image
                        //HTML 5
                        alt={"HTML5"}
                        verticalAlign="middle"
                        src={"https://i.imgur.com/EF2fDDn.png"}
                        size="mini"
                      />
                    }
                    header="HTML5"
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Popup
                    trigger={
                      <Image
                        //Java
                        alt={"Java"}
                        verticalAlign="middle"
                        src={"https://i.imgur.com/A0ziWcH.png"}
                        size="mini"
                      />
                    }
                    header="Java"
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Popup
                    trigger={
                      <Image
                        //react
                        alt={"React"}
                        verticalAlign="middle"
                        src={"https://i.imgur.com/NbwgUhc.png"}
                        size="mini"
                      />
                    }
                    header="React"
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Popup
                    trigger={
                      <Image
                        //rails
                        alt={"Rails"}
                        verticalAlign="middle"
                        src={"https://i.imgur.com/xynxjpd.png"}
                        size="mini"
                      />
                    }
                    header="Ruby on Rails"
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Popup
                    trigger={
                      <Image
                        //JS
                        alt={"Javascript"}
                        verticalAlign="middle"
                        src={"https://i.imgur.com/Qd7AipT.png"}
                        size="mini"
                      />
                    }
                    header="Javascript"
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Popup
                    trigger={
                      <Image
                        //SQL
                        alt={"SQL"}
                        verticalAlign="middle"
                        src={"https://i.imgur.com/PPz2u3d.png"}
                        size="mini"
                      />
                    }
                    header="SQLite"
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Popup
                    trigger={
                      <Image
                        //Postgres
                        alt={"PostgreSQL"}
                        verticalAlign="middle"
                        src={"https://i.imgur.com/85GEmW8.png"}
                        size="mini"
                      />
                    }
                    header="PostgreSQL"
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Popup
                    trigger={
                      <Image
                        //Eclipse
                        alt={"Eclipse"}
                        verticalAlign="middle"
                        src={"https://i.imgur.com/AyUbKOk.png"}
                        size="mini"
                      />
                    }
                    header="Eclipse"
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Popup
                    trigger={
                      <Image
                        //Python
                        alt={"Python"}
                        verticalAlign="middle"
                        src={"https://i.imgur.com/qf8GLPk.png"}
                        size="mini"
                      />
                    }
                    header="Python"
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Popup
                    trigger={
                      <Image
                        //c++
                        alt={"C++"}
                        verticalAlign="middle"
                        src={"https://i.imgur.com/RjWH8J4.png"}
                        size="mini"
                      />
                    }
                    header="C++"
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Popup
                    trigger={
                      <Image
                        //React Nativ
                        alt={"React Native"}
                        verticalAlign="middle"
                        src={"https://i.imgur.com/wdzwsBA.png"}
                        size="mini"
                      />
                    }
                    header="React Native"
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Popup
                    trigger={
                      <Image
                        //Visual Basic
                        alt={"Visual Basis"}
                        verticalAlign="middle"
                        src={"https://i.imgur.com/KHmN2E0.png"}
                        size="mini"
                      />
                    }
                    header="Visual Basic"
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Popup
                    trigger={
                      <Image
                        //Redux
                        alt={"Redux"}
                        verticalAlign="middle"
                        src={"https://i.imgur.com/tqEWNUe.png"}
                        size="mini"
                      />
                    }
                    header="Redux"
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Popup
                    trigger={
                      <Image
                        //Git
                        alt={"Git"}
                        verticalAlign="middle"
                        src={"https://i.imgur.com/cURXLc6.png"}
                        size="mini"
                      />
                    }
                    header="Git"
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Popup
                    trigger={
                      <Image
                        //Github
                        alt={"Github"}
                        verticalAlign="middle"
                        src={"https://i.imgur.com/WkyrtmR.png"}
                        size="mini"
                      />
                    }
                    header="Github"
                    style={style}
                    size="mini"
                    position="top center"
                  />*/}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column
            textAlign="right"
            verticalAlign="top"
            style={{ margin: "0rem" }}
          >
            <Header as="h3" inverted textAlign="right">
              Contact
            </Header>
            <Divider fitted hidden />
            <Item style={{ margin: "0rem" }}>
              <Link
                style={{ color: "white" }}
                onClick={() => {
                  window.open("mailto:raustin.melchior@gmail.com", "_top");
                }}
              >
                Raustin.Melchior@gmail.com&nbsp;&nbsp;
              </Link>
              <Icon name="envelope" />
            </Item>
            <Divider hidden />
            <Item style={{ margin: "0rem" }}>
              <Link
                style={{ color: "white" }}
                onClick={() => {
                  window.open("tel:818-268-5442", "_top");
                }}
              >
                818.268.5442&nbsp;&nbsp;
              </Link>
              <Icon name="phone" />
            </Item>
            <Divider fitted hidden />
            {/*<Header
              as="h5"
              inverted
              textAlign="right"
              style={{ margin: "0rem" }}
            >
              Los Angeles, CA&nbsp;&nbsp; <Icon size="mini" name="home" />
            </Header>*/}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Container>
);

export default Footer;
