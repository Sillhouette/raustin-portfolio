import React, { Component } from "react";
import { Segment, Icon, Menu, Image } from "semantic-ui-react";
import "./css/ImageDisplay.css";

export default class ImageDisplay extends Component {
  state = { activeItem: "second" };

  handleItemClick = (e, { name }) => {
    const image = document.getElementById("project-image");
    const source1 = document.getElementsByClassName("project-image-source")[0];
    const source2 = document.getElementsByClassName("project-image-source")[1];
    if (name === "first") {
      image.setAttribute("src", this.props.firstImage);
      source1.setAttribute("srcset", this.props.firstImageWeb);
      source2.setAttribute("srcset", this.props.firstImage);
    } else if (name === "second") {
      image.setAttribute("src", this.props.secondImage);
      source1.setAttribute("srcset", this.props.secondImageWeb);
      source2.setAttribute("srcset", this.props.secondImage);
    } else {
      image.setAttribute("src", this.props.thirdImage);
      source1.setAttribute("srcset", this.props.thirdImageWeb);
      source2.setAttribute("srcset", this.props.thirdImage);
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
        <picture>
          <source
            className="project-image-source"
            type="image/webp"
            srcSet={this.props.secondImageWeb}
          />
          <source
            className="project-image-source"
            type="image/jpg"
            srcSet={this.props.secondImage}
          />
          <Image
            alt="Project Example"
            id="project-image"
            src={this.props.secondImage}
            size="massive"
          />
        </picture>

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
