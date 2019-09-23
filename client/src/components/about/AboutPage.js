import React from "react";
import railsColor from "./images/rails_color.png";
import eclipseColor from "./images/eclipse_color.png";
import cplusplusColor from "./images/cplusplus_color.png";
import gitColor from "./images/git_color.png";
import githubColor from "./images/github_color.png";
import htmlColor from "./images/html_color.png";
import javaColor from "./images/java_color.png";
import jsColor from "./images/js_color.png";
import postgresqlColor from "./images/postgresql_color.png";
import pythonColor from "./images/python_color.png";
import reactColor from "./images/react_color.png";
import reactNativeColor from "./images/react_native_color.png";
import reduxColor from "./images/redux_color.png";
import rubyColor from "./images/ruby_color.png";
import sqliteColor from "./images/sqlite_color.png";
import visualBasicColor from "./images/visual_basic_color.png";
import SkillColumn from "./SkillColumn";
import { Container, Image, Grid, Header } from "semantic-ui-react";
import Filler from "../common/Filler";

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
                alt="Profile Picture"
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
        <Grid.Row centered>
          <Grid.Column style={{ paddingBottom: 35 }}>
            <Header as="h1" inverted textAlign="center">
              Skills
            </Header>
            <Container
              style={{
                backgroundColor: "rgba(255,255,255,0.6)",
                borderRadius: "25px",
                padding: 10
              }}
            >
              <Grid
                style={{ width: "100vw" }}
                container
                divided="vertically"
                stackable
                doubling
                columns="equal"
              >
                <Grid.Row>
                  <SkillColumn
                    name="Ruby"
                    circular={true}
                    image={rubyColor}
                    description="A dynamic, open source programming language with a focus on simplicity and productivity"
                  />
                  <SkillColumn
                    name="HTML 5"
                    image={htmlColor}
                    description={`The latest evolution of the standard that defines HTML.
                      The term represents two different concepts. It is a new version of the
                      language HTML, with new elements, attributes, and behaviors, and a larger
                      set of technologies that allows the building of more diverse and powerful
                      Web sites and applications`}
                  />
                  <SkillColumn
                    name="Java"
                    image={javaColor}
                    description={`Java is a general-purpose programming language that is class-based,
                      object-oriented, and designed to have as few implementation dependencies as
                      possible`}
                  />
                  <SkillColumn
                    name="React"
                    image={reactColor}
                    description={`React is a JavaScript library for building user interfaces. It is maintained
                      by Facebook and a community of individual developers and companies. React can be used
                      as a base in the development of single-page or mobile applications, as it is optimal for
                      fetching rapidly changing data that needs to be recorded`}
                  />
                  <SkillColumn
                    name="Ruby on Rails"
                    image={railsColor}
                    description={`Ruby on Rails, or Rails, is a server-side web application
                      framework written in Ruby under the MIT License. Rails is a model–view–controller
                      framework, providing default structures for a database, a web service, and web pages`}
                  />
                  <SkillColumn
                    name="Javascript"
                    image={jsColor}
                    description={`JavaScript, often abbreviated as JS, is a high-level, interpreted scripting language
                      that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing,
                      prototype-based object-orientation, and first-class functions`}
                  />
                  <SkillColumn
                    name="SQLite"
                    image={sqliteColor}
                    description={`SQLite is a relational database management system contained in a C library. In contrast to many
                      other database management systems, SQLite is not a client–server database engine. Rather, it is embedded
                      into the end program`}
                  />
                  <SkillColumn
                    name="PostgreSQL"
                    image={postgresqlColor}
                    description={`PostgreSQL, also known as Postgres, is a free and open-source relational database management system
                      emphasizing extensibility and technical standards compliance. It is designed to handle a range of workloads,
                      from single machines to data warehouses or Web services with many concurrent users`}
                  />
                </Grid.Row>
                <Grid.Row>
                  <SkillColumn
                    name="Eclipse"
                    image={eclipseColor}
                    description={`Eclipse is an integrated development environment used in computer programming. It contains a
                      base workspace and an extensible plug-in system for customizing the environment`}
                  />
                  <SkillColumn
                    name="Python"
                    image={pythonColor}
                    description={`Python is an interpreted, high-level, general-purpose programming language. Python's design philosophy
                      emphasizes code readability with its notable use of significant whitespace`}
                  />
                  <SkillColumn
                    name="C++"
                    image={cplusplusColor}
                    description={`C++ is a general-purpose programming language built as an extension of the C programming language,
                      or "C with Classes"`}
                  />
                  <SkillColumn
                    name="React Native"
                    image={reactNativeColor}
                    description={`React Native is an open-source mobile application framework created
                      by Facebook. It is used to develop applications for Android, iOS, Web and UWP
                      by enabling developers to use React along with native platform capabilities`}
                  />
                  <SkillColumn
                    name="Visual basic"
                    image={visualBasicColor}
                    description={`Visual Basic is a third-generation event-driven programming language from
                      Microsoft for its Component Object Model programming model first released in 1991
                      and declared legacy during 2008. Microsoft intended Visual Basic to be relatively
                      easy to learn and use`}
                  />
                  <SkillColumn
                    name="Redux"
                    image={reduxColor}
                    description={`Redux is an open-source JavaScript library for managing application state.
                      It is most commonly used with libraries such as React or Angular for building user
                      interfaces`}
                  />
                  <SkillColumn
                    name="Git"
                    image={gitColor}
                    description={`Git is a distributed version-control system for tracking changes in source
                      code during software development. It is designed for coordinating work among programmers,
                      but it can be used to track changes in any set of files. Its goals include speed, data integrity,
                      and support for distributed, non-linear workflows`}
                  />
                  <SkillColumn
                    name="Github"
                    image={githubColor}
                    description={`GitHub is a Git repository hosting service, but it adds many of its own features. While Git
                    is a command line tool, GitHub provides a Web-based graphical interface. It also provides access
                    control and several collaboration features, such as a wikis and basic task management tools for every
                    project`}
                  />
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
