import React from "react";
import { Link } from "react-router-dom";
import { Segment, Menu } from "semantic-ui-react";

const HomeButton = props => (
  <Menu.Item as={Link} to="/" name="home" onClick={props.handleItemClick}>
    <Segment compact basic clearing floated="right">
      <div className="content">
        <div className="ui inverted header">
          Austin Melchior <br /> Full Stack Engineer
        </div>
      </div>
    </Segment>
  </Menu.Item>
);

export default HomeButton;
