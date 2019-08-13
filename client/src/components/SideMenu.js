import React from "react";
import { Icon, Menu } from "semantic-ui-react";

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
  </Menu>
);
export default SideMenu;
