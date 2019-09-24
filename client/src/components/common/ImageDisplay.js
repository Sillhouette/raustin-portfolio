import React, { Component } from "react";
import { Segment, Icon, Menu, Image } from "semantic-ui-react";
import "./ImageDisplay.css";

export default class ImageDisplay extends Component {
  state = { activeItem: "second" };

  handleItemClick = (e, { name }) => {
    const image = document.getElementById("project-image");
    if (name === "first") {
      image.setAttribute("src", this.props.firstImage);
    } else if (name === "second") {
      image.setAttribute("src", this.props.secondImage);
    } else {
      image.setAttribute("src", this.props.thirdImage);
    }
    this.setState({ activeItem: name });
  };

  displayActiveCircle = (activeItem, currentItem) => {
    return activeItem === currentItem ? (
      <Icon name="circle" />
    ) : (
      <Icon name="circle outline" />
    );
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted compact id="main-segment">
        <Image
          id="project-image"
          alt="Project Example"
          src={this.props.secondImage}
          size="massive"
        />

        <Menu compact inverted secondary icon>
          <Menu.Item
            name="first"
            active={activeItem === "first"}
            onClick={this.handleItemClick}
          >
            {this.displayActiveCircle(activeItem, "first")}
          </Menu.Item>

          <Menu.Item
            name="second"
            active={activeItem === "second"}
            onClick={this.handleItemClick}
          >
            {this.displayActiveCircle(activeItem, "second")}
          </Menu.Item>

          <Menu.Item
            name="third"
            active={activeItem === "third"}
            onClick={this.handleItemClick}
          >
            {this.displayActiveCircle(activeItem, "third")}
          </Menu.Item>
        </Menu>
      </Segment>
    );
  }
}
