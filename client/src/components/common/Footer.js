//Start imports
import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Header,
  Segment,
  Icon,
  Divider,
  Menu,
  Item
} from "semantic-ui-react";
import "./Footer.css";

const Footer = props => (
  <Container id="footer-container" fluid>
    <Segment id="footer-segment" attached="bottom" inverted>
      <Grid id="footer-grid" divided="vertically" columns="equal">
        <Grid.Row className="padding-five">
          <Grid.Column
            textAlign="left"
            verticalAlign="top"
            className="zero-margin"
          >
            <Header as="h3" inverted textAlign="left" className="zero-margin">
              Navigation
            </Header>
            <Menu.Item
              as={Link}
              to="/"
              name="home"
              onClick={props.handleItemClick}
              className="footer-nav-menu-item"
            >
              Home
            </Menu.Item>
            <Divider fitted hidden />
            <Menu.Item
              as={Link}
              to="/projects"
              name="projects"
              onClick={props.handleItemClick}
              className="footer-nav-menu-item"
            >
              Projects
            </Menu.Item>
            <Divider fitted hidden />
            <Menu.Item
              as={Link}
              to="/resume"
              name="resume"
              onClick={props.handleItemClick}
              className="footer-nav-menu-item"
            >
              Resume
            </Menu.Item>
            <Divider fitted hidden />
            <Menu.Item
              as={Link}
              to="/about"
              name="about"
              onClick={props.handleItemClick}
              className="footer-nav-menu-item"
            >
              About
            </Menu.Item>
            <Divider fitted hidden />
            <Menu.Item
              as={Link}
              to="/blog"
              name="blog"
              onClick={props.handleItemClick}
              className="footer-nav-menu-item"
            >
              Blog
            </Menu.Item>
          </Grid.Column>
          <Grid.Column
            textAlign="right"
            verticalAlign="top"
            className="zero-margin"
          >
            <Header as="h3" inverted textAlign="right">
              Contact
            </Header>
            <Divider fitted hidden />
            <Item className="zero-margin">
              <span
                className="footer-contact-item"
                onClick={() => {
                  window.open("mailto:raustin.melchior@gmail.com", "_top");
                }}
              >
                Raustin.Melchior@gmail.com&nbsp;&nbsp;
              </span>
              <Icon name="envelope" />
            </Item>
            <Divider id="contact-divider" hidden />
            <Item className="zero-margin">
              <span
                className="footer-contact-item"
                onClick={() => {
                  window.open("tel:818-268-5442", "_top");
                }}
              >
                818.268.5442&nbsp;&nbsp;
              </span>
              <Icon name="phone" />
            </Item>
            <Divider fitted hidden />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Container>
);

export default Footer;
