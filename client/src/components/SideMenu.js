import React, { Component } from "react";
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";

export default class SideMenu extends Component {
  state = { visible: true, animation: "push" };

  render() {
    const { animation, visible } = this.state;

    return (
      <Menu icon vertical inverted secondary floated="left">
        <Menu.Item
          as="button"
          onClick={() =>
            window.open("https://github.com/Sillhouette", "_blank")
          }
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
  }
}
