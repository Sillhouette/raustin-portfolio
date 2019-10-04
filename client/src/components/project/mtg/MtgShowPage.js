import React, { Component } from "react";
import header from "./images/mtg-header.png";
import background from "./images/green-background.png";
import mainBackground from "./images/background.png";
import firstImage from "./images/mtg-example-1.png";
import secondImage from "./images/mtg-example-2.png";
import thirdImage from "./images/mtg-example-3.png";
import ImageDisplay from "../../common/ImageDisplay";
import {
  Image,
  Header,
  Container,
  Segment,
  Icon,
  Button,
  List
} from "semantic-ui-react";
import "./MtgShowPage.css";

class MtgShowPage extends Component {
  componentDidMount() {
    document.body.style.backgroundImage = `url(${background})`;
  }

  componentWillUnmount() {
    document.body.style.backgroundImage = `url(${mainBackground})`;
  }

  render() {
    return (
      <div className="page">
        <div>
          <Image src={header} alt="Header Image" id="header-image" />
          <Header inverted as="h1" id="main-header">
            Magic Manager Pro
          </Header>
        </div>
        <Container fluid id="content-container">
          <Segment id="content-segment" basic padded>
            <Header as="h2" inverted id="content-header-top">
              Developed with
            </Header>
            <Header as="h2" inverted className="content-header-bottom">
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
            <Header as="h4" inverted className="content-header-bottom">
              Technical details:
            </Header>
            <List className="white-text" bulleted>
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
            <Header as="h4" inverted>
              Test account:
            </Header>
            <List className="white-text" bulleted>
              <List.Item>Username: test</List.Item>
              <List.Item>Password: 123456</List.Item>
            </List>
          </Segment>
        </Container>
        <Container id="image-display" textAlign="center">
          <ImageDisplay
            firstImage={firstImage}
            secondImage={secondImage}
            thirdImage={thirdImage}
          />
        </Container>
      </div>
    );
  }
}

export default MtgShowPage;
