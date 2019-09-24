import React from "react";
import { Menu } from "semantic-ui-react";
import LinkButton from "./LinkButton";
import "./css/HomeButton.css";

const HomeButton = props => (
  <div>
    <Menu id="home-button-menu" icon inverted secondary>
      <Menu.Item
        as={LinkButton}
        to="/"
        name="home"
        id="home-button-menu-item"
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
