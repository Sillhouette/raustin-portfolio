import React from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Button } from "semantic-ui-react";
import LinkButton from "./common/LinkButton";

const SideMenu = () => (
  <Menu icon vertical inverted secondary floated>
    <Menu.Item
      as="button"
      onClick={() => window.open("https://github.com/Sillhouette", "_blank")}
      className="ui icon large button"
    >
      <Icon fitted size="large" name="github" />
    </Menu.Item>
    <Menu.Item
      as="button"
      onClick={() => {
        window.open("mailto:raustin.melchior@gmail.com", "_top");
      }}
      className="ui icon large button"
    >
      <Icon fitted size="large" name="envelope" />
    </Menu.Item>
    <Menu.Item
      as="button"
      onClick={() =>
        window.open("https://linkedin.com/in/richardamelchior/", "_blank")
      }
      className="ui icon large button"
    >
      <Icon fitted size="large" name="linkedin" />
    </Menu.Item>
    <Menu.Item as={LinkButton} to="/resume" className="ui button icon large">
      <Icon fitted size="large" name="file alternate outline" />
    </Menu.Item>
  </Menu>
);
export default SideMenu;
