import React, { Component } from "react";
import { Segment, Icon, Menu, Image } from "semantic-ui-react";
import "./css/ImageDisplay.css";

export default class ImageDisplay extends Component {
  state = { activeItem: "" }

  centerImage = Math.round((this.props.images.length - 1) / 2)

  componentDidMount() {
    this.setState({ activeItem: `image-${this.centerImage}` })
  }

  handleItemClick = (e, { name }) => {
    const imageIndex = parseInt(name.replace("image-", ""))
    this.changeImage(imageIndex)
    this.setState({ activeItem: name });
  };

  changeImage = (index) => {
    const image = document.getElementById("project-image");
    const [source1, source2] = document.getElementsByClassName("project-image-source")

    image.setAttribute("src", this.props.images[index].jpg);
    source1.setAttribute("srcset", this.props.images[index].webp);
    source2.setAttribute("srcset", this.props.images[index].jpg);
  }

  displayActiveCircle = (currentItem) => {
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
            srcSet={this.props.images[this.centerImage].webp}
          />
          <source
            className="project-image-source"
            type="image/jpg"
            srcSet={this.props.images[this.centerImage].jpg}
          />
          <Image
            alt="Project Example"
            id="project-image"
            src={this.props.images[this.centerImage].jpg}
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
