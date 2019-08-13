//Start imports
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Container, Segment } from "semantic-ui-react";

const Header = props => (
  <Menu borderless compact pointing secondary inverted>
    <Menu.Item
      as={Link}
      to="/"
      borderless
      fitted
      name="home"
      active={props.activeItem === "home"}
      onClick={props.handleItemClick}
    />
    <Menu.Item
      as={Link}
      to="/projects"
      borderless
      fitted
      name="projects"
      active={props.activeItem === "projects"}
      onClick={props.handleItemClick}
    />
    <Menu.Item
      as={Link}
      to="/about"
      borderless
      fitted
      name="about"
      active={props.activeItem === "about"}
      onClick={props.handleItemClick}
    />
    <Menu.Item
      as={Link}
      to="/blog"
      borderless
      fitted
      name="blog"
      active={props.activeItem === "blog"}
      onClick={props.handleItemClick}
    />

    <Menu.Item
      as={Link}
      to="/contact"
      borderless
      fitted
      name="contact"
      active={props.activeItem === "contact"}
      onClick={props.handleItemClick}
    />
  </Menu>
);

export default Header;
