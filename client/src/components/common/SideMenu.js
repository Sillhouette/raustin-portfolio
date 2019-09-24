import React from "react";
import { Icon, Menu, Dropdown } from "semantic-ui-react";
import LinkButton from "./LinkButton";
import { Link } from "react-router-dom";
import "./SideMenu.css";

const SideMenu = props => (
  <Menu fixed="top" icon vertical inverted secondary floated>
    <Menu.Item
      as="button"
      title="Menu"
      className="ui icon large button"
      id="hamburger-menu"
    >
      <Dropdown
        id="headerMenu"
        icon={null}
        title={"Menu"}
        trigger={<Icon fitted size="large" name="sidebar" />}
      >
        <Dropdown.Menu id="dropdown-menu">
          <Dropdown.Item
            as={Link}
            to="/"
            name="home"
            title="Home"
            onClick={props.handleItemClick}
            className="custom"
          >
            Home
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to="/projects"
            name="projects"
            title="Projects"
            onClick={props.handleItemClick}
            className="custom"
          >
            Projects
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to="/resume"
            name="resume"
            title="Resume"
            onClick={props.handleItemClick}
            className="custom"
          >
            Resume
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to="/about"
            name="about"
            title="About"
            onClick={props.handleItemClick}
            className="custom"
          >
            About
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to="/blog"
            name="blog"
            title="Blog"
            onClick={props.handleItemClick}
            className="custom"
          >
            Blog
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
    <Menu.Item
      as="button"
      title={"Github"}
      onClick={() => window.open("https://github.com/Sillhouette", "_blank")}
      className="ui icon large button"
    >
      <Icon fitted size="large" name="github" />
    </Menu.Item>
    <Menu.Item
      as="button"
      title={"Email"}
      onClick={() => {
        window.open("mailto:raustin.melchior@gmail.com", "_top");
      }}
      className="ui icon large button"
    >
      <Icon fitted size="large" name="envelope" />
    </Menu.Item>
    <Menu.Item
      as="button"
      title={"LinkedIn"}
      onClick={() =>
        window.open("https://linkedin.com/in/richardamelchior/", "_blank")
      }
      className="ui icon large button"
    >
      <Icon fitted size="large" name="linkedin" />
    </Menu.Item>
    <Menu.Item
      as={LinkButton}
      to="/resume"
      name="resume"
      title="Resume"
      onClick={props.handleItemClick}
      className="ui button icon large"
    >
      <Icon fitted size="large" name="file alternate outline" />
    </Menu.Item>
  </Menu>
);
export default SideMenu;
