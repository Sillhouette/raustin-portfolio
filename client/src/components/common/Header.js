//Start imports
import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./Header.css";

const Header = props => (
  <Menu id="header" compact stackable pointing secondary inverted>
    <Menu.Item
      as={Link}
      to="/"
      fitted
      name="home"
      active={props.activeItem === "home"}
      onClick={props.handleItemClick}
    />
    <Menu.Item
      as={Link}
      to="/projects"
      fitted
      name="projects"
      active={props.activeItem === "projects"}
      onClick={props.handleItemClick}
    />
    <Menu.Item
      as={Link}
      to="/resume"
      fitted
      name="resume"
      active={props.activeItem === "resume"}
      onClick={props.handleItemClick}
    />
    <Menu.Item
      as={Link}
      to="/about"
      fitted
      name="about"
      active={props.activeItem === "about"}
      onClick={props.handleItemClick}
    />
    <Menu.Item
      as={Link}
      to="/blog"
      fitted
      name="blog"
      active={props.activeItem === "blog"}
      onClick={props.handleItemClick}
    />
  </Menu>
);

export default Header;
