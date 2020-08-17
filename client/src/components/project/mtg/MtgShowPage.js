import React, { Component } from "react";
import header from "./images/mtg-header.png";
import headerWeb from "./images/mtg-header.webp";
import background from "./images/green-background.png";
import backgroundWeb from "./images/green-background.webp";
import mainBackground from "./images/background.png";
import mainBackgroundWeb from "./images/background.webp";
import firstImage from "./images/mtg-user-show-page.jpg";
import secondImage from "./images/mtg-magic-card-show.jpg";
import thirdImage from "./images/mtg-magic-card-index.jpg";
import firstImageWeb from "./images/mtg-user-show-page.webp";
import secondImageWeb from "./images/mtg-magic-card-show.webp";
import thirdImageWeb from "./images/mtg-magic-card-index.webp";
import ImageDisplay from "../../common/ImageDisplay";
import {
  Image,
  Header,
  Container,
  Segment,
  Icon,
  Button,
  List,
} from "semantic-ui-react";
import "./MtgShowPage.css";

class MtgShowPage extends Component {
  images = [
    {jpg: firstImage, webp: firstImageWeb},
    {jpg: secondImage, webp: secondImageWeb},
    {jpg: thirdImage, webp: thirdImageWeb}
  ]

  componentDidMount() {
    if (document.getElementsByTagName("html")[0].classList.contains("webp")) {
      document.body.style.backgroundImage = `url(${backgroundWeb})`;
    } else {
      document.body.style.backgroundImage = `url(${background})`;
    }
  }

  componentWillUnmount() {
    if (document.getElementsByTagName("html")[0].classList.contains("webp")) {
      document.body.style.backgroundImage = `url(${mainBackgroundWeb})`;
    } else {
      document.body.style.backgroundImage = `url(${mainBackground})`;
    }
  }

  render() {
    return (
      <div className="page">
        <div>
          <picture>
            <source type="image/webp" srcSet={headerWeb} />
            <source type="image/jpg" srcSet={header} />
            <Image alt="Header Image" src={header} id="header-image" />
          </picture>
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
            <Segment basic>
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
              <div id="button-divider">
                <br />
                <br />
              </div>
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
            </Segment>
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
            images={this.images}
          />
        </Container>
      </div>
    );
  }
}

export default MtgShowPage;
