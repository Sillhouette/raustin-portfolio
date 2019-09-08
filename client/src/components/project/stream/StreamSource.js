import React, { Component } from "react";
import header from "./images/gamer.jpeg";
import example from "./images/mtg-example-1.png";
import example2 from "./images/mtg-example-2.png";
import example3 from "./images/mtg-example-3.png";
import {
  Image,
  Header,
  Menu,
  Container,
  Segment,
  Icon,
  Button
} from "semantic-ui-react";

class StreamSource extends Component {
  state = { activeItem: "second" };

  handleItemClick = (e, { name }) => {
    const image = document.getElementById("project-image");
    if (name === "first") {
      image.setAttribute("src", example);
    } else if (name === "second") {
      image.setAttribute("src", example2);
    } else {
      image.setAttribute("src", example3);
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
      <div className="page">
        <div>
          <Image
            src={header}
            style={{
              position: "absolute",
              width: "100vw",
              zIndex: "-1",
              top: 0,
              height: "300px",
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
          <Header inverted as="h1" style={{ marginTop: "85px" }}>
            Stream Source
          </Header>
        </div>
        <Container
          fluid
          style={{
            marginTop: 135,
            background: "#fff",
            backgroundColor: "rgba(118,118,118,0.6)"
          }}
        >
          <Segment
            basic
            padded
            style={{
              width: "75%",
              marginLeft: "13%"
            }}
          >
            <Header
              as="h2"
              inverted
              style={{ marginBottom: 0, position: "relative" }}
            >
              Developed with
            </Header>
            <Header as="h2" inverted style={{ margin: 0 }}>
              React and Rails
            </Header>
            <Header inverted as="h4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              hendrerit molestie ullamcorper. Pellentesque consequat leo quis mi
              porttitor blandit. Nunc lacus odio, pellentesque et nulla mattis,
              imperdiet aliquam elit. Integer id odio nec nunc commodo posuere
              laoreet a dui. Nunc sit amet enim lobortis, convallis eros et,
              placerat sem. Nulla varius bibendum iaculis. Mauris quis nunc et
              metus pretium commodo vitae mollis purus. Fusce ut maximus nulla.
              Suspendisse dictum arcu non risus rhoncus, ut ullamcorper tortor
              elementum. Suspendisse feugiat nec ligula quis faucibus. Phasellus
              sed ornare velit, id consectetur orci. Mauris ac aliquet nunc. In
              tellus augue, ornare at maximus et, mollis non libero. Ut molestie
              dolor non volutpat tincidunt. Sed dignissim tincidunt sapien ac
              finibus. Mauris consequat urna eu diam laoreet ultricies.
            </Header>
            <Button
              circular
              icon
              labelPosition="left"
              onClick={() =>
                window.open(
                  "https://github.com/Sillhouette/Streamy-React-App",
                  "_blank"
                )
              }
            >
              <Icon name="github" />
              View Repo
            </Button>
            <Button circular icon labelPosition="right">
              <Icon name="play" />
              View Live
            </Button>
          </Segment>
        </Container>
        <Container textAlign="center" style={{ marginBottom: 200 }}>
          <Segment
            inverted
            compact
            style={{
              top: 100,
              background: "#fff",
              backgroundColor: "rgba(118,118,118,0.6)",
              marginLeft: "7%"
            }}
          >
            <Image id="project-image" src={example2} size="massive" />

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
        </Container>
      </div>
    );
  }
}

export default StreamSource;