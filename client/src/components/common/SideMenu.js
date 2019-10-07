import React from "react";
import { Icon, Menu, Dropdown } from "semantic-ui-react";
import LinkButton from "./LinkButton";
import { Link } from "react-router-dom";
import "./css/SideMenu.css";

const SideMenu = props => (
  <Menu
    id="main-side-menu"
    fixed="top"
    icon
    vertical
    inverted
    secondary
    floated
  >
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
          {/*<Dropdown.Item
            name="github"
            title="Github"
            onClick={() =>
              window.open("https://github.com/Sillhouette", "_blank")
            }
            className="custom"
          >
            Github
          </Dropdown.Item>
          <Dropdown.Item
            name="linkedin"
            title="LinkedIn"
            onClick={() =>
              window.open("https://linkedin.com/in/austinmelchior/", "_blank")
            }
            className="custom"
          >
            LinkedIn
          </Dropdown.Item>*/}
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
    <Menu.Item
      as="button"
      title={"Github"}
      onClick={() => window.open("https://github.com/Sillhouette", "_blank")}
      className="ui icon large button"
      id="github"
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
      id="email"
    >
      <Icon fitted size="large" name="envelope" />
    </Menu.Item>
    <Menu.Item
      as="button"
      title={"LinkedIn"}
      onClick={() =>
        window.open("https://linkedin.com/in/austinmelchior/", "_blank")
      }
      className="ui icon large button"
      id="linkedin"
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
      id="resume"
    >
      <Icon fitted size="large" name="file alternate outline" />
    </Menu.Item>
  </Menu>
);
export default SideMenu;
