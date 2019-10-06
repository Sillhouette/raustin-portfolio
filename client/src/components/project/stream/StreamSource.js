import React from "react";
import header from "./images/gamer.jpeg";
import firstImage from "./images/streams-create.jpg";
import secondImage from "./images/streams-show.jpg";
import thirdImage from "./images/streams-index.jpg";
import firstImageWeb from "./images/streams-create.webp";
import secondImageWeb from "./images/streams-show.webp";
import thirdImageWeb from "./images/streams-index.webp";
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
import "./StreamSource.css";

const StreamSource = () => {
  return (
    <div className="page">
      <div>
        <Image src={header} alt="" id="stream-header-image" />
        <Header inverted as="h1" id="stream-header">
          Stream Source
        </Header>
      </div>
      <Container fluid id="stream-main-content-container">
        <Segment basic padded id="stream-main-content-segment">
          <Header as="h2" inverted id="stream-header-top">
            Developed with
          </Header>
          <Header as="h2" inverted className="zero-margin">
            React and Rails
          </Header>
          <Header inverted as="h4">
            Stream Source is a web application that allows it's users to create
            live streams to display to the world. With a user account one can
            create a live stream, avaliable for anyone to watch. You can log in
            with a google account and only the user who has created a stream may
            edit or delete it.
          </Header>
          <Header as="h4" inverted className="zero-margin">
            Technical details:
          </Header>
          <List className="white-text" bulleted>
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
      <Container textAlign="center" id="image-display">
        <ImageDisplay
          firstImage={firstImage}
          secondImage={secondImage}
          thirdImage={thirdImage}
          firstImageWeb={firstImageWeb}
          secondImageWeb={secondImageWeb}
          thirdImageWeb={thirdImageWeb}
        />
      </Container>
    </div>
  );
};

export default StreamSource;
