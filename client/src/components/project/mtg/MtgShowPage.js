import React, { Component } from "react";
import header from "./images/mtg-header.png";
import background from "./images/green-background.png";
import mainBackground from "./images/background.png";
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
  Button,
  List
} from "semantic-ui-react";

class MtgShowPage extends Component {
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

  componentDidMount() {
    document.body.style.backgroundImage = `url(${background})`;
  }

  componentWillUnmount() {
    document.body.style.backgroundImage = `url(${mainBackground})`;
  }

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
              objectPosition: "top"
            }}
          />
          <Header inverted as="h1" style={{ marginTop: "85px" }}>
            Magic Manager Pro
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
              Rails and Javascript
            </Header>
            <Header inverted as="h4">
              Magic Manager Pro is a web application designed to allow it's
              users to keep track their Magic the Gathering trading cards. With
              an account, a user is able to build a library of the cards they
              own with relevant information recorded. A user can keep track of
              information such as the number of a specific card they own, their
              value, and their condition. The user can then use the cards they
              have added to their account to keep track of the decks they have
              built, along with side decks and more. All details about each card
              can also be viewed, including things such as legalities, mana
              cost, color, cost and more.
            </Header>
            <Header as="h4" inverted style={{ margin: 0 }}>
              Technical details:
            </Header>
            <List style={{ color: "white" }} bulleted>
              <List.Item>
                CRUD app built with Ruby on Rails MVC architecture
              </List.Item>
              <List.Item>Javascript enabled forms</List.Item>
              <List.Item>Powered Scryfall API</List.Item>
              <List.Item>PostgreSQL database</List.Item>
            </List>
            <Button
              circular
              icon
              labelPosition="left"
              onClick={() =>
                window.open(
                  "https://github.com/Sillhouette/magic-manager-pro-rails-js",
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
              onClick={() =>
                window.open("https://www.mtgmanager.net", "_blank")
              }
              labelPosition="right"
            >
              <Icon name="play" />
              View Live
            </Button>
            <List style={{ color: "white" }} bulleted>
              <List.Item>Login Info:</List.Item>
              <List.Item>Username: Test</List.Item>
              <List.Item>Password: 123456</List.Item>
            </List>
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

export default MtgShowPage;
