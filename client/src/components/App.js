import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import HomeButton from "./HomeButton";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";
import AboutPage from "./AboutPage";
import BlogPage from "./BlogPage";
// import ContactPage from "./ContactPage";
import ResumePage from "./ResumePage";
import history from "../history";
import "./App.css";

export default class App extends Component {
  state = { activeItem: window.location.pathname.split("/")[1] };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <HomeButton handleItemClick={this.handleItemClick} />
          <Container fluid>
            <Header
              activeItem={this.state.activeItem}
              handleItemClick={this.handleItemClick}
            />
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <HomePage handleItemClick={this.handleItemClick} />
                )}
              />
              <Route
                path="/projects"
                exact
                render={() => (
                  <ProjectPage handleItemClick={this.handleItemClick} />
                )}
              />
              <Route
                path="/projects/MTG-Manager-Pro"
                exact
                component={AboutPage}
              />
              <Route
                path="/projects/Crowder-News-CLI"
                exact
                component={AboutPage}
              />
              <Route
                path="/projects/Stream-Source"
                exact
                component={AboutPage}
              />
              <Route path="/about" exact component={AboutPage} />
              <Route path="/blog" exact component={BlogPage} />
              {/* <Route path="/contact" exact component={ContactPage} /> */}
              <Route path="/resume" exact component={ResumePage} />
            </Switch>
          </Container>
          <SideMenu />
        </Router>
      </div>
    );
  }
}
