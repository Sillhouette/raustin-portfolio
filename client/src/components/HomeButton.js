import React from "react";
import { Menu } from "semantic-ui-react";
import LinkButton from "./common/LinkButton";

const HomeButton = props => (
  <div>
    <Menu
      icon
      inverted
      secondary
      style={{ position: "fixed", top: 0, right: 0 }}
    >
      <Menu.Item
        as={LinkButton}
        to="/"
        name="home"
        onClick={props.handleItemClick}
      >
        <div className="content">
          <div className="ui inverted header">
            Austin Melchior <br /> Full Stack Engineer
          </div>
        </div>
      </Menu.Item>
    </Menu>
  </div>
);

export default HomeButton;
