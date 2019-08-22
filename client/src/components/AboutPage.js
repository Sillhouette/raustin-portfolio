import React from "react";
import { Container, Segment, Image, Grid, Header } from "semantic-ui-react";
import Filler from "./common/Filler";

const AboutPage = () => {
  return (
    <Container fluid>
      <Filler num="3" />
      <Header as="h1" inverted textAlign="center">
        Austin Melchior - Full Stack Engineer
      </Header>
      <Filler num="3" />
      <Grid
        style={{ width: "100vw", height: "100vh" }}
        container
        divided="vertically"
        columns="equal"
      >
        <Grid.Row stretched>
          <Grid.Column textAlign="center" verticalAlign="middle">
            <Container>
              <Image
                verticalAlign="middle"
                circular
                src={"https://i.imgur.com/4jWI7vj.png?1"}
                size="large"
                floated="right"
              />
              <Header as="h5" inverted textAlign="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                ligula nunc, ornare vel bibendum ac, pellentesque efficitur
                lorem. Praesent eu mi lacus. Aliquam erat volutpat. Aliquam erat
                volutpat. Ut finibus tincidunt risus vitae convallis. Donec
                laoreet augue rutrum lorem aliquam posuere. Ut sagittis
                fermentum arcu, quis fringilla nibh. Etiam urna purus, posuere
                eget orci sed, pellentesque eleifend lorem. Suspendisse lectus
                ipsum, mollis in risus at, laoreet condimentum enim. Praesent
                nec facilisis risus. Interdum et malesuada fames ac ante ipsum
                primis in faucibus.
                <br />
                <br />
                Vivamus sit amet nunc id nisi pellentesque sollicitudin. Nullam
                volutpat erat et massa mattis dictum. Nam sodales iaculis dui
                vel tincidunt. Etiam sollicitudin sed dolor sit amet finibus.
                Quisque molestie aliquet magna. Proin eget est ex. Phasellus at
                eleifend ex, eget ultrices lorem. Aliquam mollis blandit
                interdum. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Suspendisse semper nulla gravida
                malesuada sodales. Etiam viverra pretium nunc, sit amet feugiat
                neque tincidunt non. Vestibulum nec pellentesque ante. Etiam
                eget egestas eros.
                <br />
                <br />
                Duis molestie arcu id egestas suscipit. Morbi id efficitur urna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Sed pretium, odio a ullamcorper tempus, neque dui posuere metus,
                quis viverra mauris enim nec turpis. Etiam ac purus vel ex
                egestas malesuada sed eget erat. Pellentesque euismod enim ut
                lectus varius ornare. Sed placerat odio vel diam placerat
                volutpat. Pellentesque porttitor euismod purus in volutpat.
                <br />
                <br />
                Morbi bibendum erat tortor, vestibulum commodo metus imperdiet
                ac. Morbi aliquet ipsum sem, vel eleifend nibh blandit ac. Ut
                commodo purus vitae magna molestie eleifend. Aliquam id
                vestibulum lectus. Cras egestas est a tincidunt feugiat. Morbi
                molestie ultrices mauris, quis consequat lacus sollicitudin
                vulputate. Donec ac mauris nibh. Donec ut tortor sit amet mauris
                accumsan mattis quis sit amet leo. Mauris gravida feugiat
                venenatis. Nullam pretium at nibh at commodo.
                <br />
                <br />
                {/* Mauris neque arcu, feugiat eu sapien eu, tincidunt fermentum
                massa. Aliquam tincidunt quam sit amet odio aliquam convallis.
                Nulla facilisi. Proin ultrices ultricies purus eu posuere.
                Curabitur efficitur sollicitudin sem, a euismod quam hendrerit
                non. Nunc vestibulum lectus a convallis pharetra. Aliquam
                finibus libero sit amet lectus scelerisque pulvinar. Donec
                consequat tincidunt leo, ac bibendum elit sodales non. */}
              </Header>
            </Container>
            <Filler num="3" />
            <Container>
              <Header as="h1" inverted textAlign="center">
                Skills
              </Header>
              <Grid
                style={{ width: "100vw" }}
                container
                divided="vertically"
                stackable
                doubling
                columns="equal"
              >
                <Grid.Row>
                  <Grid.Column textAlign="center" verticalAlign="middle">
                    <Image
                      //ruby
                      verticalAlign="middle"
                      src={"https://i.imgur.com/zomT7rD.png"}
                      size="small"
                    />
                  </Grid.Column>
                  <Grid.Column textAlign="center" verticalAlign="middle">
                    <Image
                      //HTML 5
                      verticalAlign="middle"
                      src={"https://i.imgur.com/7RyiRb1.png"}
                      size="small"
                    />
                  </Grid.Column>
                  <Grid.Column textAlign="center" verticalAlign="middle">
                    <Image
                      //Java
                      verticalAlign="middle"
                      src={"https://i.imgur.com/aJy6fkj.png"}
                      size="small"
                    />
                  </Grid.Column>
                  <Grid.Column textAlign="center" verticalAlign="middle">
                    <Image
                      //react
                      verticalAlign="middle"
                      src={"https://i.imgur.com/hQ9PT4V.png"}
                      size="small"
                    />
                  </Grid.Column>
                  <Grid.Column textAlign="center" verticalAlign="middle">
                    <Image
                      //rails
                      verticalAlign="middle"
                      src={"https://i.imgur.com/xynxjpd.png"}
                      size="small"
                    />
                  </Grid.Column>
                  <Grid.Column textAlign="center" verticalAlign="middle">
                    <Image
                      //JS
                      verticalAlign="middle"
                      src={"https://i.imgur.com/Qd7AipT.png"}
                      size="small"
                    />
                  </Grid.Column>
                  <Grid.Column textAlign="center" verticalAlign="middle">
                    <Image
                      //SQL
                      verticalAlign="middle"
                      src={"https://i.imgur.com/PPz2u3d.png"}
                      size="small"
                    />
                  </Grid.Column>
                  <Grid.Column textAlign="center" verticalAlign="middle">
                    <Image
                      //Postgres
                      verticalAlign="middle"
                      src={"https://i.imgur.com/85GEmW8.png"}
                      size="small"
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column textAlign="center" verticalAlign="middle">
                    <Image
                      //Eclipse
                      verticalAlign="middle"
                      src={"https://i.imgur.com/AyUbKOk.png"}
                      size="small"
                    />
                  </Grid.Column>
                  <Grid.Column textAlign="center" verticalAlign="middle">
                    <Image
                      //Python
                      verticalAlign="middle"
                      src={"https://i.imgur.com/qf8GLPk.png"}
                      size="small"
                    />
                  </Grid.Column>
                  <Grid.Column textAlign="center" verticalAlign="middle">
                    <Image
                      //c++
                      verticalAlign="middle"
                      src={"https://i.imgur.com/RjWH8J4.png"}
                      size="small"
                    />
                  </Grid.Column>
                  <Grid.Column textAlign="center" verticalAlign="middle">
                    <Image
                      //React Native
                      verticalAlign="middle"
                      src={"https://i.imgur.com/wdzwsBA.png"}
                      size="small"
                    />
                  </Grid.Column>
                  <Grid.Column textAlign="center" verticalAlign="middle">
                    <Image
                      //Visual Basic
                      verticalAlign="middle"
                      src={"https://i.imgur.com/KHmN2E0.png"}
                      size="small"
                    />
                  </Grid.Column>
                  <Grid.Column textAlign="center" verticalAlign="middle">
                    <Image
                      //Redux
                      verticalAlign="middle"
                      src={"https://i.imgur.com/tqEWNUe.png"}
                      size="small"
                    />
                  </Grid.Column>
                  <Grid.Column textAlign="center" verticalAlign="middle">
                    <Image
                      //Git
                      verticalAlign="middle"
                      src={"https://i.imgur.com/cURXLc6.png"}
                      size="small"
                    />
                  </Grid.Column>
                  <Grid.Column textAlign="center" verticalAlign="middle">
                    <Image
                      //Github
                      verticalAlign="middle"
                      src={"https://i.imgur.com/WkyrtmR.png"}
                      size="small"
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default AboutPage;
