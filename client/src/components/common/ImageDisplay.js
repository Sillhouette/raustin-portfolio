import React, { Component } from "react";
import { Segment, Icon, Menu, Image } from "semantic-ui-react";
import "./css/ImageDisplay.css";

export default class ImageDisplay extends Component {
  state = { activeItem: "" }

  componentDidMount() {
    this.setState({ activeItem: `image-${this.centerIndex}` })
  }

  centerIndex = Math.round((this.props.images.length - 1) / 2)

  handleItemClick = (e, { name }) => {
    const image = document.getElementById("project-image");
    const source1 = document.getElementsByClassName("project-image-source")[0];
    const source2 = document.getElementsByClassName("project-image-source")[1];
    const index = parseInt(name.replace("image-", ""))

    image.setAttribute("src", this.props.images[index].jpg);
    source1.setAttribute("srcset", this.props.images[index].webp);
    source2.setAttribute("srcset", this.props.images[index].jpg);
    
    this.setState({ activeItem: name });
  };

  displayActiveCircle = (currentItem) => {
    console.log(this.state.activeItem, currentItem )
    return this.state.activeItem === currentItem ? (
      <Icon name="circle" />
    ) : (
      <Icon name="circle outline" />
    );
  };

  generateMenuItems = () => (
    this.props.images.map((image, index) => (
      <Menu.Item
        name={"image-" + index}
        active={this.state.activeItem === "image-" + index}
        onClick={this.handleItemClick}
        key={index}
      >
        {this.displayActiveCircle("image-" + index)}
      </Menu.Item>
    ))
  )

  render() {

    return (
      <Segment inverted compact id="main-segment">
        <picture>
          <source
            className="project-image-source"
            type="image/webp"
            srcSet={this.props.images[this.centerIndex].webp}
          />
          <source
            className="project-image-source"
            type="image/jpg"
            srcSet={this.props.images[this.centerIndex].jpg}
          />
          <Image
            alt="Project Example"
            id="project-image"
            src={this.props.images[this.centerIndex].jpg}
            size="massive"
          />
        </picture>

        <Menu compact inverted secondary icon>
          { this.generateMenuItems() }
        </Menu>
      </Segment>
    );
  }
}
