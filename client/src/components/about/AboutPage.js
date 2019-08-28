import React from "react";
import { Container, Image, Grid, Header, Popup } from "semantic-ui-react";
import Filler from "../common/Filler";

const style = {
  borderRadius: "10px",
  opacity: 0.8
};

const AboutPage = () => {
  return (
    <Container fluid>
      <Filler num="3" />
      <Header as="h1" inverted textAlign="center">
        Austin Melchior - Full Stack Engineer
      </Header>
      <Filler num="3" />
      <Grid style={{ width: "100vw" }}>
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
              <Header as="h2" inverted textAlign="center">
                <br />
                <br />
                Passionate about creating comprehensive web applications that
                cater to the needs of the end user
                <br />
                <br />
                <br />
                Extensive skills and unique background that allows for creative
                solutions to problems that face businesses
                <br />
                <br />
                <br />
                Team oriented, with the ability to be self sufficient when the
                need arises
                <br />
                <br />
              </Header>
            </Container>
            <Filler num="3" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ paddingBottom: 35 }}>
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
                  <Popup
                    trigger={
                      <Image
                        //ruby
                        verticalAlign="middle"
                        src={"https://i.imgur.com/hRTeTK8.png"}
                        size="small"
                      />
                    }
                    header="Ruby"
                    content="A dynamic, open source programming language with a focus on simplicity and productivity"
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="middle">
                  <Popup
                    trigger={
                      <Image
                        //HTML 5
                        verticalAlign="middle"
                        src={"https://i.imgur.com/EF2fDDn.png"}
                        size="small"
                      />
                    }
                    header="HTML5"
                    content={`The latest evolution of the standard that defines HTML.
                      The term represents two different concepts. It is a new version of the
                      language HTML, with new elements, attributes, and behaviors, and a larger
                       set of technologies that allows the building of more diverse and powerful
                        Web sites and applications`}
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="middle">
                  <Popup
                    trigger={
                      <Image
                        //Java
                        verticalAlign="middle"
                        src={"https://i.imgur.com/A0ziWcH.png"}
                        size="small"
                      />
                    }
                    header="Java"
                    content={`Java is a general-purpose programming language that is class-based,
                     object-oriented, and designed to have as few implementation dependencies as
                     possible`}
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="middle">
                  <Popup
                    trigger={
                      <Image
                        //react
                        verticalAlign="middle"
                        src={"https://i.imgur.com/NbwgUhc.png"}
                        size="small"
                      />
                    }
                    header="React"
                    content={`React is a JavaScript library for building user interfaces. It is maintained
                      by Facebook and a community of individual developers and companies. React can be used
                      as a base in the development of single-page or mobile applications, as it is optimal for
                      fetching rapidly changing data that needs to be recorded`}
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="middle">
                  <Popup
                    trigger={
                      <Image
                        //rails
                        verticalAlign="middle"
                        src={"https://i.imgur.com/xynxjpd.png"}
                        size="small"
                      />
                    }
                    header="Ruby on Rails"
                    content={`Ruby on Rails, or Rails, is a server-side web application
                      framework written in Ruby under the MIT License. Rails is a model–view–controller
                      framework, providing default structures for a database, a web service, and web pages.`}
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="middle">
                  <Popup
                    trigger={
                      <Image
                        //JS
                        verticalAlign="middle"
                        src={"https://i.imgur.com/Qd7AipT.png"}
                        size="small"
                      />
                    }
                    header="Javascript"
                    content={`JavaScript, often abbreviated as JS, is a high-level, interpreted scripting language
                      that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing,
                      prototype-based object-orientation, and first-class functions`}
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="middle">
                  <Popup
                    trigger={
                      <Image
                        //SQL
                        verticalAlign="middle"
                        src={"https://i.imgur.com/PPz2u3d.png"}
                        size="small"
                      />
                    }
                    header="SQLite"
                    content={`SQLite is a relational database management system contained in a C library. In contrast to many
                      other database management systems, SQLite is not a client–server database engine. Rather, it is embedded
                      into the end program`}
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="middle">
                  <Popup
                    trigger={
                      <Image
                        //Postgres
                        verticalAlign="middle"
                        src={"https://i.imgur.com/85GEmW8.png"}
                        size="small"
                      />
                    }
                    header="PostgreSQL"
                    content={`PostgreSQL, also known as Postgres, is a free and open-source relational database management system
                      emphasizing extensibility and technical standards compliance. It is designed to handle a range of workloads,
                      from single machines to data warehouses or Web services with many concurrent users`}
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center" verticalAlign="middle">
                  <Popup
                    trigger={
                      <Image
                        //Eclipse
                        verticalAlign="middle"
                        src={"https://i.imgur.com/AyUbKOk.png"}
                        size="small"
                      />
                    }
                    header="Eclipse"
                    content={`Eclipse is an integrated development environment used in computer programming. It contains a
                      base workspace and an extensible plug-in system for customizing the environment`}
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="middle">
                  <Popup
                    trigger={
                      <Image
                        //Python
                        verticalAlign="middle"
                        src={"https://i.imgur.com/qf8GLPk.png"}
                        size="small"
                      />
                    }
                    header="Python"
                    content={`Python is an interpreted, high-level, general-purpose programming language. Python's design philosophy
                    emphasizes code readability with its notable use of significant whitespace`}
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="middle">
                  <Popup
                    trigger={
                      <Image
                        //c++
                        verticalAlign="middle"
                        src={"https://i.imgur.com/RjWH8J4.png"}
                        size="small"
                      />
                    }
                    header="C++"
                    content={`C++ is a general-purpose programming language built as an extension of the C programming language,
                      or "C with Classes"`}
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="middle">
                  <Popup
                    trigger={
                      <Image
                        //React Native
                        verticalAlign="middle"
                        src={"https://i.imgur.com/wdzwsBA.png"}
                        size="small"
                      />
                    }
                    header="React Native"
                    content={`React Native is an open-source mobile application framework created
                      by Facebook. It is used to develop applications for Android, iOS, Web and UWP
                      by enabling developers to use React along with native platform capabilities`}
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="middle">
                  <Popup
                    trigger={
                      <Image
                        //Visual Basic
                        verticalAlign="middle"
                        src={"https://i.imgur.com/KHmN2E0.png"}
                        size="small"
                      />
                    }
                    header="Visual Basic"
                    content={`Visual Basic is a third-generation event-driven programming language from
                      Microsoft for its Component Object Model programming model first released in 1991
                      and declared legacy during 2008. Microsoft intended Visual Basic to be relatively
                      easy to learn and use`}
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="middle">
                  <Popup
                    trigger={
                      <Image
                        //Redux
                        verticalAlign="middle"
                        src={"https://i.imgur.com/tqEWNUe.png"}
                        size="small"
                      />
                    }
                    header="Redux"
                    content={`Redux is an open-source JavaScript library for managing application state.
                      It is most commonly used with libraries such as React or Angular for building user
                      interfaces.`}
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="middle">
                  <Popup
                    trigger={
                      <Image
                        //Git
                        verticalAlign="middle"
                        src={"https://i.imgur.com/cURXLc6.png"}
                        size="small"
                      />
                    }
                    header="Git"
                    content={`Git is a distributed version-control system for tracking changes in source
                      code during software development. It is designed for coordinating work among programmers,
                      but it can be used to track changes in any set of files. Its goals include speed, data integrity,
                      and support for distributed, non-linear workflows`}
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="middle">
                  <Popup
                    trigger={
                      <Image
                        //Github
                        verticalAlign="middle"
                        src={"https://i.imgur.com/WkyrtmR.png"}
                        size="small"
                      />
                    }
                    header="Github"
                    content={`GitHub is a Git repository hosting service, but it adds many of its own features. While Git
                      is a command line tool, GitHub provides a Web-based graphical interface. It also provides access
                      control and several collaboration features, such as a wikis and basic task management tools for every
                      project`}
                    style={style}
                    size="mini"
                    position="top center"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default AboutPage;
