import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Segment, Sidebar, Container } from "semantic-ui-react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import HomeButton from "./HomeButton";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";
import AboutPage from "./AboutPage";
import BlogPage from "./BlogPage";
import ContactPage from "./ContactPage";
import history from "../history";
import "./App.css";

export default class App extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <SideMenu />
          <HomeButton handleItemClick={this.handleItemClick} />
          <Header
            activeItem={this.state.activeItem}
            handleItemClick={this.handleItemClick}
          />
          <Switch>
            <Route
              path="/"
              exact
              render={() => <HomePage handleItemClick={this.handleItemClick} />}
            />
            <Route path="/projects" exact component={ProjectPage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/blog" exact component={BlogPage} />
            <Route path="/contact" exact component={ContactPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}
