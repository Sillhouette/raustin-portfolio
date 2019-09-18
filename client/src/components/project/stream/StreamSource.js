import React, { Component } from "react";
import header from "./images/gamer.jpeg";
import example from "./images/stream-source-show.png";
import example2 from "./images/stream-source-index.png";
import example3 from "./images/stream-source-delete.png";
import {
  Image,
  Header,
  Menu,
  Container,
  Segment,
  Icon,
  Button,
  List
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
              Stream Source is a web application that allows it's users to
              create live streams to display to the world. With a user account
              one can create a live stream, avaliable for anyone to watch. You
              can log in with a google account and only the user who has created
              a stream may edit or delete it.
            </Header>
            <Header as="h4" inverted style={{ margin: 0 }}>
              Technical details:
            </Header>
            <List style={{ color: "white" }} bulleted>
              <List.Item>CRUD app built with React</List.Item>
              <List.Item>Rails API backend for data management</List.Item>
              <List.Item>PostgreSQL database</List.Item>
            </List>
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
            <Button
              circular
              icon
              labelPosition="right"
              onClick={() =>
                window.open("http://www.stream-source.net", "_blank")
              }
            >
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
